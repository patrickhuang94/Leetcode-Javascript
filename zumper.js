// [2, 7, 3] => [2, 7, 4]
// [9, 9, 9] => [1, 0, 0, 0]

var addOne = function(arr) {
    //Solution 1
    var num = parseInt(arr.join('').toString()) + 1; //num = 273 + 1 => 274
    
    //Integer -> string -> array of strings
    num = num.toString().split(''); ['2', '7', '4']
    
    var result = num.map(function(x) {
        return parseInt(x, 10); //[2, 7, 4]
    });
    
    return result;
    
    //Solution 2
    var lastIndex = arr.length-1; //2
    for (var i = arr.length -1; i >= 0; i--) {
        arr[i] = arr[i] + 1; //[9, 9, 9] => [9, 9, 10] => [9, 9, 0] => [9, 0, 0] => [0, 0, 0] => [1, 0, 0, 0]
        if (arr[i] == 10) {
            arr[i] = 0;
            if (i == 0) { //checking for the index
                arr.unshift(1);
                break;
            }
        } else {
            break;
        }
    }
    
    return arr; //[1, 0, 0, 0]
}


//[3, 2, 3, 4, 3, 4] => [3, 2, 4]
// [1, 2, 3, 3, 2] 
function removeDuplicate(arr){
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
               arr.splice(i, 1); //[3, 2, 3, 4] => [2, 3, 4]
               i--;
            }
        }
    }
    return arr;
}