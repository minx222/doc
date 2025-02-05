const compose = (...args) => {
    const dispatch = (index) => {
        if (index === middlewares.length) {
            return;
        }
        // 获取当前要执行的中间件
        const middleware = middlewares[index];
        // 调用当前中间件，并传入上下文对象和下一个中间件的调用函数
        middleware(ctx, () => dispatch(index + 1));
    }
    return function() {
        
    }
}