var repeatedSubstringPattern = function(s) {
    var len = s.length;
    
    for (var i = Math.ceil(len/2); i >=1; i--) {
        if (len%i === 0) {
            var c = len/i;
            var t = "";
            
            for (var k = 0; k < c; k++) {
                t += s.substr(0,i);
            }
            
            if (t === s) return true;
        }
    }
    
    return false;
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("abab"));