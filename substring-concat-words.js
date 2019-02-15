var con = console;
var log = con.log;
/**
 * @description https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var sLen = s.length;
    var wordsLen = words.length;
    var table = {};
    var ans = [];
    var begin = 0;
    var end = 0;
    var currwindow = "";
    var lastWord = "";
    var firstWord = "";
    var counter = 0;
    var windowLen = words.join("").length;

    if (wordsLen == 0 || sLen < windowLen) return ans;

    var wordSize = words[0].length;


    for (var i = 0; i < wordsLen; i++) {
        if (table[words[i]] === undefined) {
            table[words[i]] = 1;
            counter++;
        } else {
            table[words[i]]++;
        }
    }

    var tableRef = Object.assign({}, table);
    var counterRef = counter;

    // log("windowLen:", windowLen);
    // log("wordsLen:", wordsLen);
    // log("counter:", counter);
    // log(JSON.stringify(table));

    for (var j = 0; j < wordSize; j++) {
        begin = j;
        end = j;
        table = Object.assign({}, tableRef);
        counter = counterRef;
        // log("\n");
        // log("begin:", begin, "end:", end);

        while (end+wordSize-1 < sLen) {
            lastWord = s.substr(end, wordSize);
            // log("lastWord:", lastWord);
            
            if (table[lastWord] !== undefined) {
                table[lastWord]--;
                if (table[lastWord] === 0) counter--;
            }
            // log("table:", table);
            // log("currWindowSize:", end+wordSize-begin)
            // log("counter:", counter);

            if (end+wordSize-begin === windowLen) {
                if (counter === 0) {
                    if (ans.indexOf(begin) < 0) ans.push(begin);
                    // log("solution = ", "begin:", begin, "substr:", s.substr(begin, end+wordSize-begin));
                }

                firstWord = s.substr(begin, wordSize);

                if (table[firstWord] !== undefined) {
                    table[firstWord]++;
                    if (table[firstWord] > 0) counter++;
                }

                begin += wordSize;
            }
            end += wordSize;
        }
    }
    return ans;
};

con.clear();
var args = [
    // {
    //     s: "barfoothefoobarman",
    //     words: ["foo", "bar"]
    // },
    // {
    //     s: "wordgoodgoodgoodbestword",
    //     words: ["word","good","best","word"]
    // },
    {
        s: "mississippi",
        words: ["is"]
    },
];

// I should cache args.length but also :P
for (var k = 0; k < args.length; k++) {
    log("s:", args[k].s, "words:", args[k].words);
    log("returns:", findSubstring(args[k].s, args[k].words));
    log("\n");
}
