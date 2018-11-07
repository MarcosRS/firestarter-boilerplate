const liveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*'],
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2'],
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new liveReloadPlugin({
            appendScriptTag: true
        }),
    ],
};
