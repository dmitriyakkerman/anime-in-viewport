let path = require('path');
let webpack = require('webpack');

module.exports = {
    watch: true,
    entry: {
        'anime-in-viewport': './src/anime-in-viewport.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    }
};