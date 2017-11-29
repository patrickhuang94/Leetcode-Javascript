//[1, 1, 2, 3] -> arr.indexOf(1) = 0, current index = 0, pass
//arr.indexOf(1) = 0 still (indexOf finds the FIRST occurrence), current index = 1, discard
let uniqueArray = a.filter((ele, index, arr) => {
	arr.indexOf(ele) === index
})

return uniqueArray
