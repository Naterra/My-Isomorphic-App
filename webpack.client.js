// process.traceDeprecation = true;
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');




const VENDOR_LIBRARIES = [
    'react',
    'react-dom',
    'react-router-dom',
    'axios',
    'react-redux',
    'react-router-config',
    'redux',
];

const config = {
    // Tell webpack the root file of our
    // server application
    entry: {
        bundle: './src/client/client.js',
        vendor: VENDOR_LIBRARIES,
    },

    // Tell webpack where to put the output file
    // that is generated
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
    },
    plugins: [],
    optimization: {}
};



let mergedConfig = merge(baseConfig, config);
module.exports = mergedConfig;