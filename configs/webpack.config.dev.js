const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        // Specify a host. (Defaults to 'localhost'.)
        host: "localhost",

        // Port the application listen to
        port: 8080,
        historyApiFallback: true,
        open: true,
        overlay: {
            errors: true,
            warnings: true,
        },
        compress: true,
        lazy: false,
    },
});
