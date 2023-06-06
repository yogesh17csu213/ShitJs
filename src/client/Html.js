import React from "react";
import Head from "./Head";


export default function Html({ meta, children }) {
  return (
    <html lang="en">
      <Head meta={meta} />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<b>Enable JavaScript to run this app.</b>`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
 