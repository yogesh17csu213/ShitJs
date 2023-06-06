const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
// const BundleAnalyzerPlugin =
// 	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// Server Config File
const serverConfig = {
	resolve: {
		fallback: {
			fs: false,
		},
	},
	entry: "./server/index.js",
	output: {
		filename: "index.js",
		path: path.join(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|sass|css)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
				sideEffects: true,
			},
			{
				test: /\.m?js$/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
		],
	},
	devtool: "eval",
	devServer: {
		hot: true,
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({}),
		new webpack.HotModuleReplacementPlugin(),
		new NodePolyfillPlugin(),
		new MiniCssExtractPlugin({
			filename: "main.css",
			chunkFilename: "[id].style.[hash:8].css",
		}),
		new webpack.DefinePlugin({
			__isBrowser__: "false",
		}),
		// new BundleAnalyzerPlugin({
		// 	analyzerMode: "server",
		// 	generateStatsFile: true,
		// 	statsOptions: { source: false },
		// }),
	],
	externalsPresets: {
		node: true, // in order to ignore built-in modules like path, fs, etc.
	},
	externals: [nodeExternals()],
	node: { __dirname: false },
	mode: "production",
};

// Client Config file
const clientConfig = {
	resolve: {
		fallback: {
			fs: false,
		},
	},
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.join(__dirname, "dist"),
		publicPath: "/",
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			__isBrowser__: "true",
		}),
		// new BundleAnalyzerPlugin({
		// 	analyzerMode: "static",
		// 	generateStatsFile: true,
		// 	statsOptions: { source: false },
		// }),
	],
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|sass|css)$/i,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
				exclude: /\.module\.css$/,
			},
			{
				test: /\.m?js$/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
		],
	},
	externalsPresets: {
		node: true
	},
	devtool: "eval",
	devServer: {
		static: {
			directory: path.join(__dirname + "/public"),
		},
		historyApiFallback: true,
		hot: true,
	},
	mode: "production",
};

module.exports = [serverConfig, clientConfig];
