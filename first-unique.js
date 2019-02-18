var firstUniqChar = function(s) {
    var len = s.length;
    var table = {};
    var non = [];

    if(s === "") return -1;

    // console.log("the word is " + s);
    
    for (var j = 0; j < len; j++) {
        if (table[s[j]] === undefined) {
            table[s[j]] = true;
            non.push({ letter: s[j], index: j });
        } else {
            // console.log("...");
            // console.log({non});
            non = non.filter(function (value) {
                // console.log({val: value, letter: s[j]});
                return value.letter != s[j];
            });
            // console.log({non});
        }  
    }
    
    return non.length ? non[0].index : -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("cc"));