---
outline: deep
---

# Webpack构建流程

## 1. 初始化参数

- 读取配置：合并命令行参数与配置文件（`webpack.config.js`），生成最终配置。

- 创建 `Compiler` 对象：Webpack 的核心调度器，负责整个编译过程的生命周期管理。

- 加载插件：实例化配置中的插件，调用插件的 apply 方法，注册生命周期钩子。

## 2. 编译阶段

- 确定入口（`Entry`）：根据配置的 entry 属性，找到所有入口文件。

- 构建模块依赖图(`Compilation`)：

    - 递归解析依赖：从入口文件出发，解析模块的依赖关系（如 import、require 语句）。

    - Loader 处理：对非 JS 文件（如 CSS、图片）调用对应的 Loader 进行转译（Loader 按从右到左的顺序执行）。

    - 生成 AST：将代码转换为抽象语法树（AST），分析模块间的依赖关系。

    - 创建模块对象：记录模块的路径、依赖、转译后的代码等信息。

## 3. 优化阶段
- Chunk 生成：根据入口和`代码分割（SplitChunks）`配置，将模块分组成不同的 Chunk。

- 执行优化插件：
    - Tree Shaking：移除未使用的代码（ES6 Module 静态分析）。
    - Scope Hoisting：合并模块，减少闭包数量。
    - 代码压缩：使用 `TerserPlugin` 等工具压缩 JS 和 CSS。
    - 其他优化：如公共代码提取、懒加载处理等。

## 4. 输出阶段
- 生成资源：将 `Chunk` 转换为输出文件，根据 output 配置生成文件名和路径。
- 写入文件系统：将最终资源（Bundle、Chunk、Assets）输出到目标目录。
- 触发钩子：执行 emit、done 等生命周期钩子，插件可在此阶段修改输出内容。


```shell
初始化配置 → 创建 Compiler → 启动编译 → 解析入口 → 构建模块依赖图 → 优化 → 输出文件
```

## 常见生命周期钩子
| Hook 名称 | 描述 |
| --- | --- |
| `run` | 在开始执行编译时调用 |
| `compilation` | 在新的 Compilation 创建时调用 |
| `emit` | 在生成资源到输出目录之前调用 |
| `done` | 在编译完成后调用 |
| `afterEmit` | 在资源输出到文件系统之后调用 |
| `optimize` | 在资源优化开始时调用 |
| `splitChunks` | 在代码分割开始时调用 |
| `processAssets` | asset 处理 |
| `minimize` | 在代码压缩开始时调用 |
| `afterOptimize` | 在资源优化完成后调用 |

