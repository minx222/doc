function InsertionSort (arr) {
	for(let i = 1; i < arr.length; i ++) {
		for(let j = i; j > 0; j--) {
			if(arr[j] < arr[j - 1]) {
				swap(arr, j, j-1)
			}else {
				break
			}
		}
	}
}
function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
