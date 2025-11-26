import path from 'path'
import type { Configuration as WebpackConfiguration } from 'webpack'
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
    entry: './src/main.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'weather-widget.js',

        library: {
            name: 'WeatherWidget',
            type: 'umd',
            export: 'default'
        },

        globalObject: 'this',
        clean: true
    },

    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue': 'vue/dist/vue.runtime.esm-bundler.js'
        }
    },

    module: {
        rules: [
            // Vue Single File Components
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            // TypeScript
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            transpileOnly: true
                        }
                    }
                ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            // SCSS
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        })
    ],

    // Dev Server
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },

    devtool: 'source-map',

    optimization: {
        minimize: true
    }
}

export default config
