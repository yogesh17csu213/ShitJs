import React from "react";
// import Meta from "../client/Meta";

export default function Layout({ children }) {
	return (
		// <html lang="en">
		// <head>
		// <Meta metaData={meta} />
		// <link rel="shortcut icon" href="favicon.png" />
		// {/* <link rel="preload" href="global.css" as="style" /> */}
		// {/* <link rel="preload" href="main.css" as="style" /> */}
		// {/* <link rel="stylesheet"  href="global.css" /> */}
		// {/* <link rel="stylesheet" href="main.css" /> */}
		// </head>
		// <body>
		// <noscript
		// dangerouslySetInnerHTML={{
		// __html: `<b>Enable JavaScript to run this app.</b>`,
		// }}
		// />
		<main>{children}</main>
		// </body>
		// </html>
	);
}
