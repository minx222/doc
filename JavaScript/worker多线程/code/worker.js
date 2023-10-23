// 监听来自主线程的消息
onmessage = function(event) {
    const n = event.data;
    var result = fibonacciArray(n);
    // 将结果发送回主线程
    postMessage(result);
};
  // 计算斐波那契数列
function fibonacciArray(n) {
    var fib = [1, 1];  // 前两个数字是1
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];  // 计算下一个数字并添加到数组中
    }
    return fib;
}
  