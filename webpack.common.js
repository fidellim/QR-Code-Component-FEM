const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, "src/index.js"),
	},
	resolve: {
		extensions: [".js"],
		modules: ["src", "node_modules"], // Assuming that your files are inside the src dir
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		clean: true,
		assetModuleFilename: "[name][ext]",
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: "babel-loader",
			// 		options: {
			// 			presets: ["@babel/preset-env"],
			// 		},
			// 	},
			// },
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "QR Code Component",
			filename: "index.html",
			template: "src/index.html",
		}),
	],
};
