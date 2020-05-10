
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const copyFiles = new CopyPlugin([
    { from: 'node_modules/bootstrap/scss/', to: '../assets/scss/bootstrap/' }
]);

const jscriptRules = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
};

const sassRules = {
    test: /\.scss$/,
    use: [
        {loader: MiniCssExtractPlugin.loader},
        {loader: 'css-loader'},
        {loader: 'sass-loader'}
    ]
}

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const cssPlugin = new MiniCssExtractPlugin({
    filename: 'css/style.css'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js',
        // publicPath: '/'
    },
    devServer:{
        port: 3300,
        host: '192.168.10.44',
        historyApiFallback: true
    },
    resolve:{
        extensions: ['.js','.jsx']
    },  
    module: {
        rules: [jscriptRules,sassRules],
    },
    plugins: [htmlPlugin,cssPlugin],
};