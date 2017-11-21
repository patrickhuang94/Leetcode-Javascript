var isValid = function(s) {
    var mappings = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    var array = []

    for (var i = 0; i < s.length; i++) {
        //Keep track of corresponding closed character inside stack
        if (mappings[s[i]]) {
            array.push(mappings[s[i]])
        } else {
            //The popped element should correspond to the opening character
            //If the popped element isn't the same, return false
            if (array.pop() !== s[i]) {
                return false
            }
        }
    }

    return array.length === 0

};
