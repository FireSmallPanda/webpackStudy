let htmlWebPackPlugin = require("html-webpack-plugin")
let path = require("path")
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'js/[name]-[chunkhash:8].js'
    },
    module: {
        rules: [
            { 
            test: /\.js$/, 
            exclude: path.resolve(__dirname, 'node_modules'),  // 忽略读取的
            include: path.resolve(__dirname, 'src'), // 只需读取的 
            loader: "babel-loader" },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader!postcss-loader" 
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
    ]
}