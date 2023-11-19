export function debounce<A extends any[], R>(fn: (...args: A) => R, wait: number): (...args: A) => Promise<R>  {
  // 在这里写下你的代码
	if(typeof fn !== 'function') {
		throw new Error('第一个的参数必须为可执行函数,请检测的参数')
	}
	// js定时器最低时长为4，为防止出现意料之外的情况，这里做第二个判断
	if(isNaN(wait) || wait < 4) {
		throw new Error('间隔时长必须为数字且大于等于4,请检测的参数')
	}
	let timer: NodeJS.Timeout | null = null
	function dbFn(...args: A): Promise<R> {
		return new Promise((resolve) => {
			if(timer !== null){
				clearTimeout(timer);
			}
			// 处理特殊情况，刚好在第 wait 秒触发时
			timer = setTimeout(()=> {
				const r = fn(...args)
				resolve(r)
			}, wait + 1);
		})
	}

	dbFn.cancel = function() {
		if(timer !== null){
			clearTimeout(timer)
			timer = null
		}
	}

	return dbFn
}
