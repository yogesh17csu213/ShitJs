import React from "react";
import { getMeta } from "../../utils";

const Meta = ({ metaData }) => {
	if (!metaData) {
		metaData = getMeta();
	}

	return (
		<>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{metaData?.title && <title>{metaData?.title}</title>}
			{metaData?.og_title && (
				<meta property="og:title" content={metaData?.title} key="og-title" />
			)}
		</>
	);
};

export default Meta;
