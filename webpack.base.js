const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./src/client/assets/css/main.css');

module.exports = {
    // Tell webpack to run babel on every file it runs through
    module:{
        rules:[
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
            },
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     loader: "file-loader?name=/images/[name].[ext]"
            // }
            // {
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [
            //         'file-loader',
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 bypassOnDebug: true, // webpack@1.x
            //                 disable: true, // webpack@2.x and newer
            //             },
            //         },
            //     ],
            // }
            {
                test: /.*\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[name].[hash].[ext]',
                            limit: 20000,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            mozjpeg: {
                                quality: 85,
                            },
                            pngquant: {
                                quality: '80-90',
                                speed: 1,
                            },
                        },
                    },
                ],
            }
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: [
            //         'file?hash=sha512&digest=hex&name=[hash].[ext]',
            //         'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            //     ]
            // }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        extractCSS
    ]
};