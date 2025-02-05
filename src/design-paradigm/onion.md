---
outline: deep
---


# 洋葱模型
洋葱模型是一种中间件（Middleware）的设计模式，其执行过程像洋葱的层次结构一样，从外层到内层，再从内层到外层。这种模式在很多框架中被广泛使用，如 Koa、Redux 等。

## 1. 同步代码
```typescript
type Middleware<CTX, T = void> = (ctx: CTX | undefined, next: (() => void)) => T;

const compose = <CTX = any>(...middlewares: Middleware<CTX>[]) => {
    const dispatch = (index: number, ctx?: CTX) => {
        if (index === middlewares.length) {
            return;
        }
        // 获取当前要执行的中间件
        const middleware = middlewares[index];
        // 调用当前中间件，并传入上下文对象和下一个中间件的调用函数
        middleware(ctx, () => dispatch(index + 1));
    }
    return function() {
        dispatch(0);
    }
}
```

## 2. 异步代码
```typescript
type Middleware<CTX, T = void> = (ctx: CTX | undefined, next: (() => Promise<void>)) => T;

const compose = <CTX = any>(...middlewares: Middleware<CTX>[]) => {
    const dispatch = async (index: number, ctx?: CTX): Promise<void> => {
        if (index === middlewares.length) {
            return Promise.resolve();
        }
        // 获取当前要执行的中间件
        const middleware = middlewares[index];
        // 调用当前中间件，并传入上下文对象和下一个中间件的调用函数
        return Promise.resolve(middleware(ctx, () => dispatch(index + 1)))
    }
    return function() {
        dispatch(0);
    }
}
```