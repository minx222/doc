function debounce(fn, wait) {
  // 在这里写下你的代码
	if(typeof fn !== 'function') {
		throw new Error('第一个的参数必须为可执行函数,请检测的参数')
	}
	
	// js定时器最低时长为4，为防止出现意料之外的情况，这里做第二个判断
	if(isNaN(wait) || wait < 4) {
		throw new Error('间隔时长必须为数字且大于等于4,请检测的参数')
	}

	let timer = null
	function dbFn(...args) {
		let context = this
		return new Promise((resolve) => {
			if(timer !== null){
				clearTimeout(timer);
			}

			// 处理特殊情况，刚好在第 wait 秒触发时
			timer = setTimeout(()=> {
				const r = fn.apply(context, args)
				resolve(r)
			}, wait + 1);
		})
	}

	dbFn.cancel = function() {
		clearTimeout(timer)
		timer = null
	}

	return dbFn
}

async function run() {
  const a1 = debounce(console.log, 50);

  a1(1, 2);
  await sleep(50);
  a1(2, 3);
  await sleep(50);
  a1(3, 4);
  await sleep(50);
  a1(4, 5);
  await sleep(50);
  a1(5, 6);
  await sleep(51);
  // 经过 150(10 + 20 + 30 + 40 + 50) 毫秒（近似）打印出 5 6

  a1(6, 7);
  await sleep(10);
  a1(7, 8);
  // 经过 60(10 + 50) 毫秒（近似）打印出 7 8
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

run();
