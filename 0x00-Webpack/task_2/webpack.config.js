const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    performance: {
        maxAssetSize: 1000000, // Limits asset size warnings
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // CSS handling
            },
            {
                test: /\.(gif|svg|png|jpg|jpeg)$/i,
                type: 'asset/resource', // Built-in Webpack 5 asset module for images
                generator: {
                    filename: 'images/[name][ext]', // Output path for images
                },
                use: [
                    {
                        loader: 'image-webpack-loader', // Image optimization
                        options: {
                            disable: true, // Set to false to enable in production
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
};
