class AsyncTaskController  {
	constructor(maxConcurrent) {
    // 初始化最大并发数
    this.maxConcurrent = maxConcurrent;
    // 初始化当前并发数
    this.currentConcurrent = 0;
    // 初始化任务队列
    this.taskQueue = [];
  }

	 // 添加一个异步任务到队列中，接受一个返回promise的函数作为参数
	 addTask(task) {
    // 将任务函数加入队列
    this.taskQueue.push(task);
    // 尝试执行下一个任务
    this.next();
  }

	 // 执行下一个任务，如果当前并发数小于最大并发数，并且队列不为空，则从队列中取出一个任务并执行，否则什么都不做
	next() {
    if (this.currentConcurrent < this.maxConcurrent && this.taskQueue.length > 0) {
      // 取出队列中的第一个任务函数，并从队列中移除它
      const task = this.taskQueue.shift();
      // 增加当前并发数
      this.currentConcurrent++;
      // 执行任务函数，并处理其返回的promise对象
      task()
        .then((result) => {
          // 如果成功，打印结果（或者做其他操作）
          console.log(result);
        })
        .catch((error) => {
          // 如果失败，打印错误（或者做其他操作）
          console.error(error);
        })
        .finally(() => {
          // 不管成功还是失败，都要减少当前并发数，并执行下一个任务（递归调用）
          this.currentConcurrent--;
          this.next();
        });
    }
  }
}

const request = () => {
	
}
