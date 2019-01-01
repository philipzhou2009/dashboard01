const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

// https://github.com/zeit/next-plugins/issues/266
// https://spectrum.chat/next-js/general/unexpected-token-error-when-importing-aws-amplify-react~ba3668b1-f0b1-42a6-9c71-d7d9d3b67f04
if (typeof require !== "undefined") {
    require.extensions[".less"] = () => {};
    require.extensions[".css"] = (file) => {};
}

module.exports = withPlugins([
    withCSS({
        webpack: function (config) {
            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]'
                    }
                }
            })
            return config
        }
    }),
    withSass
    // withTM({
    //     transpileModules: ['react-perfect-scrollbar', '@coreui']
    // })
])

// module.exports = withSass(withCSS({
//     cssModules: true,
//     cssLoaderOptions: {
//       importLoaders: 1,
//       localIdentName: "[local]___[hash:base64:5]",
//     },
//     webpack: function (config) {
//         config.module.rules.push({
//             test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//             use: {
//                 loader: 'url-loader',
//                 options: {
//                     limit: 100000,
//                     name: '[name].[ext]'
//                 }
//             }
//         })
//         return config
//     }
// }))