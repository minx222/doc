---
outline: deep
---

# 事件循环
JavaScript 是一门单线程的编程语言，这意味着它只有一个主线程来处理所有的任务。事件循环是 JavaScript 实现异步编程的核心机制，它使得 JavaScript 能够非阻塞地执行代码。

在浏览器，事件循环依赖于浏览器提供。

在 v8 中，事件循环是由 libuv 库实现的。

## 1. 为什么需要事件循环
- ``单线程的局限性``：JavaScript 运行在单线程环境中，如果没有事件循环机制，执行长时间任务时会导致页面卡顿

- ``异步操作的需求``：在网页开发中，经常需要处理网络请求、定时器、用户交互等异步操作

- ``提升性能``：通过事件循环机制，可以在等待异步操作的同时继续执行其他代码


## 2. 事件循环的核心组成部分
1. 调用栈（Call Stack）
   - 用于存储正在执行的代码
   - 遵循后进先出（LIFO）的原则
   - 当栈为空时，事件循环会检查任务队列

2. 堆（Heap）
   - 用于存储对象、变量等数据
   - 内存分配的地方

3. 任务队列（Task Queue）
   - 同步任务队列（Synchronous Task Queue）
   - 宏任务队列（Macrotask Queue）
   - 微任务队列（Microtask Queue）

## 3. Promise

### 3.1 Promise A+规范
Promise A+规范是Promise的一种实现规范，它规定了Promise的行为，包括Promise的状态、then方法、catch方法等。
规范指出：
1. Promise有三种状态：pending、fulfilled、rejected
2. Promise的状态只能从pending变为fulfilled或从pending变为rejected，且一旦变为某一种状态，就不会再改变
3. Promise必须提供一个then(name = thenable)方法来访问其当前值或原因
   - then方法接收两个参数：onFulfilled和onRejected
   - 这两个参数都是可选的，如果不是函数，则会被忽略
   - 这两个参数都必须在Promise执行完成后被调用
4. then方法可以被同一个promise调用多次
   - 当promise变为fulfilled状态，所有onFulfilled回调按照注册顺序执行
   - 当promise变为rejected状态，所有onRejected回调按照注册顺序执行
5. then方法必须返回一个Promise, then的回掉函数如果返回一个Promise，那么then返回的Promise要吸收这个状态(ps: 在V8中吸收的过程是一个微任务)

### 3.2 Promise的运行状态
1. Promise创建构造函数是同步的
2. then方法会把onFulfilled和onRejected放到微任务队列中

### 3.3 状态吸收
Promise 的状态吸收是指当一个 Promise 对象的状态发生改变后，这个状态会被后续的 Promise 链式调用所"吸收"。这是 Promise 链式调用中的一个重要特性。
```javascript
Promise
   .resolve()
   .then(() => {
      console.log(1)
      return Promise.resolve();
   })
   .then(() => {
      console.log(4)
   });


Promise
   .resolve()
   .then(() => {
      console.log(2)
   })
   .then(() => {
      console.log(3)
   })
```

> print: 1234

执行顺序:
1. console.log(1)、console.log(2)

2. Promise.resolve().then、console.log(3)

3. console.log(4)


## 4. js多线程
在浏览器中，js运行在渲染主线程，js是单线程，但js执行的网络请求是由网络线程执行，同时，浏览器通过web worker和service worker可以让js可以实现跨线程通信


## 5. 常见的异步任务Api

### 5.1 宏任务（Macro task）API
| API | 浏览器 | Node.js | 描述 |
|-----|--------|---------|------|
| setTimeout | ✓ | ✓ | 延时执行任务 |
| setInterval | ✓ | ✓ | 周期性执行任务 |
| setImmediate | ✗ | ✓ | 在当前事件循环结束时执行 |
| requestAnimationFrame | ✓ | ✗ | 在下一次重绘之前执行 |
| I/O 操作 | ✓ | ✓ | 文件、网络等 I/O 操作 |
| UI 渲染 | ✓ | ✗ | DOM 渲染任务 |
| MessageChannel | ✓ | ✗ | 消息通道通信 |
| window.postMessage | ✓ | ✗ | 跨窗口通信 |

### 5.2 微任务（Micro task）API
| API | 浏览器 | Node.js | 描述 |
|-----|--------|---------|------|
| Promise.then/.catch/.finally | ✓ | ✓ | Promise 回调 |
| process.nextTick | ✗ | ✓ | Node.js 特有，优先级最高 |
| MutationObserver | ✓ | ✗ | 监视 DOM 变化 |
| queueMicrotask | ✓ | ✓ | 显式创建微任务 |
| IntersectionObserver | ✓ | ✗ | 观察元素可见性变化 |
