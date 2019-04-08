let htmlWebPackPlugin = require("html-webpack-plugin")
let path = require("path")
module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:'js/[name]-[chunkhash:8].js'
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
    ]
}