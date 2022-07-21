module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.tsx`,
  mode: "development",
  // ファイルの出力設定
  output: {
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    static: "dist",
    open: true,
  },
  target: ["web", "es5"],
  devtool: "source-map",
};
