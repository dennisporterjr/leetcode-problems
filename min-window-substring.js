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

    if(s[right] in table) {
        if(table[s[right]] > 0) count--;
        table[s[right]]--;
        l('first check', js(table), {count});
    }

    while(right < slen && left <= right && left > -1) {
        if(count < 1) {
            let al = ans.length;
            ans = al === 0 || ans.length > (right-left) ? s.slice(left,right+1) : ans;

            l(js(ans));
            l('answer found', js(table), {count});

            left++;
            if(s[left-1] in table) {
                if(table[s[left-1]] > -1) count++;
                table[s[left-1]]++;
            }

        } else {
            l(js(s.slice(left,right+1)));
            l('no answer', js(table), {count});

            right++;
            if(s[right] in table) {
                if(table[s[right]] > 0) count--;
                table[s[right]]--;
            }
        }
        l("\n");
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
















