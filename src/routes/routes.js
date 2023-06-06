import React, { lazy } from "react";

// import { contentMeta } from "../Pages/Content.js";
// import { contactMeta } from "../Pages/Contact.js";

const Content = lazy(() =>
	import("../Pages/Content.js" /* webpackPrefetch: true */)
);

const Contact = lazy(() =>
	import("../Pages/Contact.js" /* webpackPrefetch: true */)
);

const Found404 = () => {
	return (
		<>
			<h1>Not Found</h1>
		</>
	);
};

export const routes = [
	{
		path: "/",
		component: Content,
		// meta: contentMeta,
	},
	{
		path: "/contact",
		component: Contact,
		// meta: contactMeta,
	},
	{
		path: "*",
		component: Found404,
		// meta: contentMeta,
	},
];
