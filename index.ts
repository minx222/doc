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

async function middleware1(ctx, next) {
    console.log("Middleware 1: Before next");
    await next();
    console.log("Middleware 1: After next");
}

// 定义第二个中间件函数
async function middleware2(ctx, next) {
    console.log("Middleware 2: Before next");
    await next();
    console.log("Middleware 2: After next");
}

// 定义第三个中间件函数
async function middleware3(ctx, next) {
    console.log("Middleware 3: Before next");
    console.log("Handling request...");
    console.log("Middleware 3: After next");
}

compose(middleware1, middleware2, middleware3)()