import React from "react";
import serialize from "serialize-javascript";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { DataProvider, GlobalData } from "../store/Context";

import App from "../src/App";

module.exports = async function render(url, res) {
	res.socket.on("error", (error) => {
		console.error("Fatal", error);
	});

	let didError = false;

	// Creating Server Data
	let data = createServerData();
	// Render the App
	const { pipe, abort } = renderToPipeableStream(
		<DataProvider data={data}>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</DataProvider>,
		{
			// Start Streaming
			onShellReady() {
				res.statusCode = didError ? 500 : 200;
				res.setHeader("Content-type", "text/html");
				pipe(res);
			},
			onAllReady() {
				res.write(
					` <script>window.initial_state = ${serialize(
						GlobalData
					)}</script><script src="/main.js" async></script>`
				);
			},
			onError(x) {
				didError = true;
				console.error(x);
			},
		}
	);

	// Abort the Stream
	let streamTimeOut = setTimeout(() => abort(), 5000);
};

// Creating the server data
function createServerData() {
	let done = false;
	let promise = null;
	let loading = "0%";
	let meta = null;
	return {
		promise,
		done,
		loading,
		meta,
		num: 0,
	};
}
