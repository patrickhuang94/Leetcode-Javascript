/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * For example, given "egg", "add", return true.
 * Given "foo", "bar", return false
 */ 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map1 = {},
        map2 = {},
        i, 
        j;
    
    //s = 'add', t = 'egg'
    for (i = 0; i < s.length; i++) {
        if (map1.hasOwnProperty(s[i])) {
            if (map1[s[i]] !== t[i])
                return false;
        } else {
            //map1[s[i]] will contain t[i]
            //map1[s[0]] = 'e', map1[s[1]] = 'g'
            map1[s[i]] = t[i];
        }
    }
    
    //For cases like 'ab' and 'aa'
    for (j = 0; j < t.length; j++) {
        if (map2.hasOwnProperty(t[j])) {
            if (map2[t[j]] !== s[j])
                return false;
        } else {
            map2[t[j]] = s[j];
        }
    }
    return true;
};