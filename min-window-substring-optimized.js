var jp = JSON.parse, js = JSON.stringify, l = console.log;
var loop = 0;
/**
 * @description https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t, log) {
    loop = 0;

    if(s.length === 0 || t.length === 0) return '';

    var table = {},
        fslen,
        tlen = t.length,
        ans = '',
        fs = [],
        right = 0,
        left = 0,
        count = 0;


    for(let k = 0; k < t.length; k++) {
        if(table[t[k]]) {
            table[t[k]]++;
        } else {
            table[t[k]] = 1;
        }
        count++;
    }

    for(let k = 0; k < s.length; k++) {
        if(s[k] in table) {
            fs.push(k);
        }
    }

    fslen = fs.length;
    
    while(right < fslen) {
        let nest = false;

        if(left > right) break;

        if(table[s[fs[right]]]-- > 0) count--;

        while(count === 0) {

            nest = true;
            loop++;
            if(left > right) break;

            ans = 
                !ans
                || ans.length > (fs[right] - fs[left]) 
                ? 
                    s.slice(fs[left],(fs[right]+1))
                    : ans;
                
            if(ans.length === tlen) return ans;

            left++;
            if(table[s[fs[left-1]]]++ > -1) count++;
        } 

        loop = nest ? loop : (loop+1);
        right++;
    }
    
    log && console.log('optmzd looped', loop);
    return ans;
};

var minWindowNaive = function(s, t, log) {
    loop = 0;
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
        let nest = false;
        if(left > right) break;

        updateRight(s[right]);

        while(count === 0) {

            nest = true;
            loop++;

            if(left > right) break;

            ans = !ans || ans.length > (right-left) ? s.slice(left,right+1) : ans;

            left++;
            let removed = s[left-1];
            if(removed in table) {
                if(table[removed]++ > -1) count++;
            }
        } 

        loop = nest ? loop : (loop+1);
        right++;
    }
    
    log && console.log('naive looped', loop);
    return ans;
};

var S = "ADOBECODEBAXNCYOUOUHIOABCIUOI";
var T = "ABC";
// var S = "acbbaca";
// var T = "aba";
// var S2 = "a";
// var T2 = "aa";

let testNum = 1000000;
var start = new Date().getTime();
for(let j = 0; j < testNum; j++) {
    if(j==0) {
        l(minWindow(S,T,true)); continue;
    }
    minWindow(S, T);
}
var end = new Date().getTime();
console.log(end-start);

var start = new Date().getTime();
for(let j = 0; j < testNum; j++) {
    if(j==0) {
        l(minWindowNaive(S,T,true)); continue;
    }
    minWindowNaive(S, T);
}
var end = new Date().getTime();
console.log(end-start);
//l(minWindow(S2, T2));
