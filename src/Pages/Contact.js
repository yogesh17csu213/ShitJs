import React, { Suspense, lazy } from "react";

import Layout from "../Components/Layout";
import NavBar from "../Components/NavBar";
import Spinner from "../Components/Spinner";
// import { handleMeta } from "../../utils";

const Comments = lazy(() =>
  import("../Components/Comments" /* webpackPrefetch: true */)
);
const Sidebar = lazy(() =>
  import("../Components/Sidebar" /* webpackPrefetch: true */)
);
const Post = lazy(() =>
  import("../Components/Post" /* webpackPrefetch: true */)
);

export default function Contact() {
  return (
    <Layout>
      <NavBar />
      <h2>Contact Page</h2>
      <aside className="sidebar">
        <Suspense fallback={<Spinner />}>
          <Sidebar />
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
    </Layout>
  );
}

// export const contactMeta = () => {
//   const meta = {
//     title: "Contact Page",
//     og_title: true
//   }
//   handleMeta(meta);
// }


