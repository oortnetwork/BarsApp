const config = require("./wpgulp.config.js");

const path = require("path");
const outputDir = path.resolve(__dirname, "assets/js");

module.exports = {
	mode: "development",
	entry: config.jsAppSRC,
	devtool: "inline-source-map",
	output: {
		path: outputDir,
		filename: config.jsAppFile + ".js",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.js$/,
				use: ["source-map-loader"],
				enforce: "pre",
			},
		],
	},
};
