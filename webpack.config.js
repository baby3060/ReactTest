const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry : './app.js',
    output : {
        path : '/',
        filename : 'index.js'
    },
    devServer : {
        inline : true,
        hot : true,
        port : 8181
    },
    module : {
        rules : [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options : {
                    presets: ['env', 'es2015', 'react', 'stage-0']
                }
            },
            {
                test:/\.css$/,
                use : ExtractTextPlugin.extract ({
                    fallback: 'style-loader',
                    use : 'css-loader'
                })
            },
            {
                test : /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader : 'url-loader',
                options : {
                    name: '[hash].[ext]',
                    limit : 10000
                }
            }
        ]
    },
    resolve : {
        modules : ['node_modules'],
        extensions : ['.js', '.json', '.jsx', '.css']
    },
    plugins : [
        new webpack.LoaderOptionsPlugin({
            minimize : true,
            debug : true
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
            filename : 'app.css'
        })
    ]
}

module.exports = config;