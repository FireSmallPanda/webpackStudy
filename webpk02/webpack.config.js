let htmlWebPackPlugin = require("html-webpack-plugin")
let path = require("path")
module.exports = {
    entry:{
        a:"./src/js/a.js",
        b:"./src/js/a.js"
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:'js/[name]-[chunkhash:8].js'
    },
    plugins:[
        new htmlWebPackPlugin({
            template:"./src/view/index.html"
        })
    ]
}