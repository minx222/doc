---
outline: deep
---


# Rollup
Rollup 是一个 JavaScript 模块打包器，专注于打包 JavaScript 库和应用。它使用 ES 模块标准（ESM）作为模块格式，能够生成更加简洁和高效的代码。

## 插件执行顺序
Rollup 的插件系统基于构建钩子（hooks）实现，整个构建过程分为多个阶段：
从上到下，按生命周期顺序执行。

### 1. 构建阶段（Build Hooks）
1. `options`: 配置初始化

2. `buildStart`: 构建开始

3. `resolveId`: 解析模块 ID

4. `load`: 加载模块

5. `transform`: 转换模块代码

6. `moduleParsed`: 模块解析完成

7. `buildEnd`: 构建结束

### 2. 输出阶段（Output Hooks）
1. `outputOptions`: 输出配置初始化

2. `renderStart`: 开始生成输出

3. `banner/footer/intro/outro`: 添加额外代码

4. `renderChunk`: 处理输出的代码块

5. `generateBundle`: 生成最终文件

6. `writeBundle`: 写入文件系统
