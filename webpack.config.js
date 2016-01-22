var path = require("path");
var webpack = require("webpack");
var root = path.resolve(__dirname, 'src');
console.log(root);
module.exports = {
    entry: './src/main.tsx',
    output: {
        filename: 'www/assets/bundle.js',
        library: 'demo',
        libraryTarget: 'var'
    },
    resolve: {
        root: root,
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        })
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}