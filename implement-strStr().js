/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!haystack.includes(needle)) {
        return -1;
    }
    
    if (haystack.length === 0) {
        return 0;
    }
    
    var i, str;
    //Look through entirety of haystack and look for the needle
    for (i = 0; i < haystack.length; i++) {
        //Cut up haystack into parts of needle.length
        str = haystack.substr(i, needle.length);
        if (str == needle) {
            return i;
        }
    } 
};