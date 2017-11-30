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
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options : {
                    presets: ['env', 'es2015', 'react', 'stage-0']
                }
            },
            {
                test:/\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader : 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                          }
                    },
                    { 
                        loader: 'postcss-loader',
                          options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                              require('postcss-flexbugs-fixes')(),
                              require('postcss-import')({ root: loader.resourcePath }),
                              require('postcss-cssnext')({
                                  warnForDuplicates : false
                              }),
                              require('cssnano')()
                            ]
                          } 
                    }
                  ]
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
