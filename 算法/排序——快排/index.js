function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left >= right) {
		return;
	}

	const pivotIndex = partition(arr, left, right);
	quickSort(arr, left, pivotIndex - 1);
	quickSort(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
	// 最右边的值为基准值
	const pivot = arr[right];
	// 设置0位起点
	let partitionIndex = left;
	console.log(pivot, "pivot");
	console.log(partitionIndex, "partitionIndex");

	for (let i = left; i < right; i++) {
		if (arr[i] < pivot) {
			swap(arr, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(arr, right, partitionIndex);

	return partitionIndex;
}

function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

const arr = [1, 3, 2, 1, 5, 4];
/**
 * [1, 3, 2, 1, 4, 5]
 */
