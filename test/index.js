class RequestController {
  constructor(maxConcurrent) {
    this.maxConcurrent = maxConcurrent;
    this.pending = 0;
    this.queue = [];
  }

  run(promiseCreator) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        resolve,
        reject,
        promise: promiseCreator()  
      });
      this.dequeue();
    });
  }

  dequeue() {
    while(this.pending < this.maxConcurrent && this.queue.length) {
      const item = this.queue.shift();
      this.pending++;
      item.promise
        .then(result => {
					console.log(item)
          item.resolve(result);
          this.pending--;
          this.dequeue();
        })
        .catch(err => {
          item.reject(err);
          this.pending--;
          this.dequeue();
        });
    }
  }
}

const controller = new RequestController(5); 

// 使用
for(let i in 10) {
	console.log(i)
	controller.run(() => fetch('http://172.16.10.32:9002/api/services/app/External/GetIotParamsControlList?Id=GNM505'))
  .then(response => {
    console.log(response)
  })
  .catch(err => {
   // handle error   
  });
}
