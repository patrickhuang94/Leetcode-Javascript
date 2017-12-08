function shortestStringInArray(arr) {
	arr.reduce((left, right) => {
		return left.length <= right.length ? left : right
	})
}
