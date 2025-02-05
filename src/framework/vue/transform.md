---
outline: deep
---


# Vue 编译过程
Vue的编译通过oxc（rust）实现。oxc核心包为：oxc-parser、oxc-resolver、oxc-traverser、oxc-transformer.

1. `oxc-parser`：将模板字符串解析成Ast

2. `oxc-resolver`：文件路径解析

3. `oxc-traverser`：Ast遍历

4. `oxc-transformer`: 将ts转化为js

## 1. parser
通过oxc解析vue文件形成Ast，传入下一步骤

## 2. transform
解析ast，将Ast转成VNode（ 渲染函数 ）

## 3. generate
将VNode转化成js ast
