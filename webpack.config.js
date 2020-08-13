const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Development',
            chunks: [ 'main' ]
        })
    ],
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'main.bundle.js'
    // },
    devServer: {
        contentBase: './dist'
    }
};