var l = console.log;
/**
 * @description https://leetcode.com/problems/verifying-an-alien-dictionary/
 * @repo https://github.com/dennisporterjr/practice-algorithms/blob/master/is-alien-sorted.js
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let wordTable = {};
    let letterTable = {};

    for(let i = 0; i < words.length-1; i++) {
        let firstWord = words[i];
        let secondWord = words[i+1];
        let firstWordLength = firstWord.length;
        let wHash = firstWord + "|" + secondWord; 

        if(wordTable[wHash]) continue;
        if(firstWord === secondWord) continue;
        if(firstWord.startsWith(secondWord)) return false;
        if(secondWord.startsWith(firstWord)) continue;

        for(let j = 0; j < firstWordLength; j++) {
            let lHash = firstWord[j] + "|" + secondWord[j];

            if(letterTable[lHash] === "same") continue;
            if(letterTable[lHash] === "compared") break;

            let first = order.indexOf(firstWord[j]);
            let second = order.indexOf(secondWord[j]);

            if(first < second && j === 0) break;
            
            if(first > second) {
                return false;
            } else if(firstWord[j] !== secondWord[j]) {
                letterTable[lHash] = "compared";
                break;
            }

            letterTable[lHash] = "same";
        }

        wordTable[wHash] = true;
    }

    return true;
};

// var words = ["apap","app"];
// var order = "abcdefghijklmnopqrstuvwxyz";
var words = ["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"];
var order = "zkgwaverfimqxbnctdplsjyohu";
l(isAlienSorted(words, order))
