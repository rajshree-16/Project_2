/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.module.rules.push({
//         test: /\.(pdf)$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: 'static/media/[name].[hash].[ext]',
//           },
//         },
//       });
//     }
//     return config;
//   },
// };