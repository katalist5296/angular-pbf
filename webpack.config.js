const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: ".",
          to: "",
          from: "native-addons/*.node",
          globOptions: {
            dot: true,
          },
        }
      ],
    })
]
};
