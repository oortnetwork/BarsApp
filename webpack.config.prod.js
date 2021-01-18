const config = require("./wpgulp.config.js");

const path = require("path");
const outputDir = path.resolve(__dirname, "assets/js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	mode: "production",
	entry: config.jsAppSRC,
	output: {
		path: outputDir,
		filename: config.jsAppFile + ".min.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	optimization: {
		concatenateModules: true,
		minimize: true,
	},
};
