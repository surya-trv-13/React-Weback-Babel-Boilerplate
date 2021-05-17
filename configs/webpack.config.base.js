const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const environment = process.env.NODE_ENV;

console.log(`process.env.NODE_ENV ::::: ${process.env.NODE_ENV}`);
console.log(`environment          ::::: ${environment}`);

module.exports = {
    entry: [
        "./src/index.js", // entry point
    ],
    output: {
        path: path.resolve("dist"),
        filename: "cam/bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(gif|jpg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
            { test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
            { test: /\.svg$/, use: ["@svgr/webpack"] },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "body",
        }),
    ],
};
