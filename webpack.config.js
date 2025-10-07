const path = require("path");

module.exports = {
  entry: "./app.js", // الملف الرئيسي اللي يبدأ منه المشروع
  output: {
    filename: "bundle.js", // اسم الملف النهائي بعد التجميع
    path: path.resolve(__dirname, "dist"), // مجلد الإخراج
  },
  module: {
    rules: [
      {
        test: /\.js$/, // كل ملفات JS
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // لتحويل JS حديث → قديم
          },
        },
      },
      {
        test: /\.css$/, // كل ملفات CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development", // وضع التطوير، لاحقًا ممكن نغيرها production
};
