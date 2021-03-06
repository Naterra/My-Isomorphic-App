const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


// Exclude node_modules from server build
const webpackNodeExternals = require('webpack-node-externals');


const config  = {
    // Inform webpack that we're buildiing a bundle
    // for nodeJS, rather than for the browser
    target:'node',

    // Tell webpack the root file of our
    // server application
    entry: './server/index.js',

    // Tell webpack where to put the output file
    // that is generated
    output:{
        filename: 'server.js',
        path: path.resolve(__dirname, 'build_server')
    },

    externals: [webpackNodeExternals()]


};

module.exports = merge(baseConfig, config);