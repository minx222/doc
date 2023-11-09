function insertionSort(arr) {
	// 数组长度
  const len = arr.length;
	// 上一个元素的下标
	let prev = 0;
	// 当前排序下标
	let current = 1;

	for(let i = 1; i < len; i++) {
		preIndex = i - 1; 
    current = arr[i];
		while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex+1] = arr[preIndex];
      preIndex--;
    }
	}
}
