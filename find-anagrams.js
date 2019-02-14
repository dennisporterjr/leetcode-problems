/**
 * @description https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var ans = [];
    var begin = 0;
    var end = 0;
    var sLen = s.length;
    var pLen = p.length;
    var table = {};
    var counter = 0;
    var endChar = "";
    var startChar = "";

    // create a letter frequency table
    for (var i = 0; i < pLen; i++) {
        if (table[p[i]]) {
            table[p[i]]++;
        } else {
            table[p[i]] = 1;
            counter++;
        }
    }

    // console.log("table: ", table);
    // console.log("counter: ", counter, "\n");

    while (end < sLen) {
        // console.log("\nIteration 'end' = ", end, "'begin' = ", begin);
        endChar = s[end];
        // console.log("endChar:", endChar);

        if (table[endChar] !== undefined) {
            table[endChar]--;

            if (table[endChar] === 0) counter--;
        }
        // console.log("table: ", table);
        // console.log("counter: ", counter, "\n");

        while (counter === 0) {

            // console.log("end-begin:", end-begin+1, ", pLen:", pLen);
            if (end-begin+1 == pLen) {
                ans.push(begin);
                // console.log("ans:", begin);
            }

            startChar = s[begin];
            if (table[startChar] !== undefined) {
                table[startChar]++;

                if (table[startChar] > 0) counter++;
            }
            begin++;
        }
        end++;
    }
    
    return ans;
};

// console.clear();

// var S = "cbaebabacd";
// var P = "abc";
// console.log("\n***************************");
// console.log("findAnagrams:", S, P, "\n");
// console.log(findAnagrams(S, P));
// console.log("\n");

// var S1 = "abab";
// var P1 = "ab";
// console.log("\n***************************");
// console.log("findAnagrams:", S1, P1, "\n");
// console.log(findAnagrams(S1, P1));
// console.log("\n");