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
            filename:"a.html",
            template:"./src/view/index.html",
            chunks:['a']
        }),
        new htmlWebPackPlugin({
            filename:"b.html",
            template:"./src/view/index.html",
            chunks:['b'],
            excludeChunks:['a']
            
        })
    ]
}