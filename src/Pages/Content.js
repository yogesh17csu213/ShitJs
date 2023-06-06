// import "../assets/global.css";
import React, { Suspense, lazy } from "react";

import Layout from "../Components/Layout";
import NavBar from "../Components/NavBar";
import Spinner from "../Components/Spinner";
// import Skeleton from "../Components/Skeleton/Skeleton";
// import { skeletonLink } from "../Components/Skeleton/Skeleton";

const Comments = lazy(() =>
  import("../Components/Comments" /* webpackPrefetch: true */)
);
const Second = lazy(() =>
  import("../Components/Second" /* webpackPrefetch: true */)
);
const Sidebar = lazy(() =>
  import("../Components/Sidebar" /* webpackPrefetch: true */)
);
const Post = lazy(() =>
  import("../Components/Post" /* webpackPrefetch: true */)
);

// import "../assets/color.css";

// import { metaRepo } from "../../repositories/Comments/calls";
// import { getServerData } from "../../store/Context";


export default function Content({  }) {
	// getServerData("meta", metaRepo);

	return (
		<Layout >
			<div className="back">
				<NavBar />
				<aside className="sidebar">
					<Suspense fallback={<Spinner />}>
						<Sidebar />
					</Suspense>
					<Suspense fallback={<Spinner />}>
						<Second />
					</Suspense>
				</aside>
				<article className="post">
					<Suspense fallback={<Spinner />}>
						<Post />
					</Suspense>
					<section className="comments">
						<h2>Comments</h2>
						<Suspense fallback={<Spinner />}>
							<Comments />
						</Suspense>
					</section>
					<h2>Thanks for reading!</h2>
				</article>
			</div>
		</Layout>
	);
}

// export const contentMeta = () => {
// 	getServerData("meta", metaRepo);
// };

