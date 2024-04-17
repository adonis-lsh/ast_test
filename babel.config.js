const presets = ["@babel/preset-typescript", "@babel/preset-react", "@babel/preset-env"]

const plugins = [
  [
    './dist/index.js',
    {
      libraryName: "antd", // 引入的库名
      libraryDirectory: "lib", // 指定库文件的路径，如果是 es6 模块则是 es，如果是 commonjs 则是 lib
      style: true
    }
  ]
]
module.exports = { presets, plugins }

