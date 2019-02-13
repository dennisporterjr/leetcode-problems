/**
 * @description https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var sLen = s.length;
    var wordsLen = words.length;

    // keep track of how many words have been found in the current answer candidate
    // wordTable = { "the": 1, "words": 1, "to": 1, "look": 1, "for": 1 }
    // numNeededWords = wordsLen; // in this case 5

    // 1. Start at first character // while(i < sLen)
    // 2. Check if the string starting at that index (i) starts with any word in the 
    //    "words" array.
    // If so, 
        // 0. Have we found all the words?
            // 1. If so add the starting index (i) to the answer array
        // 1. If we haven't found all the words, decrement numNeededWords
        // 2. Use the length of the "found" word to create a substring with remaining
        //    characters
    // 
};