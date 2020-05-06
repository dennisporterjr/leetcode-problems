var jp = JSON.parse, js = JSON.stringify, l = console.log;
/**
 * @description https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var table = {};
    var slen = s.length;
    var ans = '';
    var right = 0;
    var left = 0;
    var count = 0;

    t.split('').forEach((e) => {
        if(table[e]) {
            table[e]++;
        } else {
            table[e] = 1;
        }
        count++;
    });


    function updateRight(r) {
        if(r in table) {
            if(table[r]-- > 0) count--;
        }
    }
    
    while(right < slen) {
        if(left > right) break;

        updateRight(s[right]);

        while(!count) {

            if(left > right) break;

            ans = !ans || ans.length > (right-left) ? s.slice(left,right+1) : ans;

            left++;
            let removed = s[left-1];
            if(removed in table) {
                if(table[removed]++ > -1) count++;
            }
        } 

        right++;
    }
    
    return ans;
};


// var S = "ADOBECODEBAXNCYOUOUHIOABCIUOI";
// var T = "ABC";
var S = "acbbaca";
var T = "aba";
// var S2 = "a";
// var T2 = "aa";
l(minWindow(S, T));
//l(minWindow(S2, T2));
