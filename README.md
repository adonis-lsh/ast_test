## 总体思路

1. 通过 tsc 命令来编译 ts 编写的插件文件并生成对应的源码文件
2. 在 tsconfig.json 里面来处理编译的配置信息 对应快捷键 cmd + shift + B 也就是.vscode 中对应的 task.json 的配置
3. launch.json 就是调试的配置文件, 思路就是用 node-moudle 里面的 babel 去执行测试文件
4. babel.config.js 就是配置自定义 babel 组件加载,调试快捷键 F5
