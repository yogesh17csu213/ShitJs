import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

import Html from "./client/Html";
import Spinner from "./Components/Spinner";

import { metaRepo } from "../repositories/Comments/calls";
// import { useDataContext } from "../store/Context";
// import { link } from "./Pages/Content";
import { useDataContext ,getServerData } from "../store/Context";

import "./assets/color.css"

export default function App() {
	const apiData = useDataContext();
	getServerData("meta", metaRepo);
	return (
		// <Suspense fallback={<Spinner />}>
			<Html meta={apiData?.meta?.data?.data}>
				{/* <Suspense fallback={<Spinner />}> */}
					{/* <ErrorBoundary FallbackComponent={Error}> */}
						<Routes>
							{routes.map((route, key) => {
								const {
									path,
									component: Component,
									// meta: Meta
								} = route;
								// Meta();
								return <Route key={key} path={path} element={<Component />} />;
							})}
						</Routes>
					{/* </ErrorBoundary> */}
				{/* </Suspense> */}
			</Html>
		// </Suspense>
	);
}

// function Error({ error }) {
// 	return (
// 		<div>
// 			<h1>Application Error</h1>
// 			<pre style={{ whiteSpace: "pre-wrap" }}>{error?.stack}</pre>
// 		</div>
// 	);
// }
