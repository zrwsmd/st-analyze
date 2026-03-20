// // @ts-check
// import path, { resolve as _resolve } from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const outputPath = _resolve(__dirname, 'out');

// /**@type {import('webpack').Configuration}*/
// const config = {
//     target: 'node',

//     entry: [_resolve(__dirname, './main.ts')],
//     output: {
//         filename: 'language-server.js',
//         path: outputPath
//         // libraryTarget: 'umd'
//     },
//     devtool: 'nosources-source-map',

//     resolve: {
//         extensions: ['.ts', '.js']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: ['ts-loader']
//             },
//             {
//                 test: /\.js$/,
//                 use: ['source-map-loader'],
//                 enforce: 'pre'
//             }
//         ]
//     },
//     ignoreWarnings: [/Failed to parse source map/]
// };

// export default config;
