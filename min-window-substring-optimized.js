/**
 * @description https://leetcode.com/problems/minimum-window-substring/
 * @repo https://github.com/dennisporterjr/practice-algorithms/blob/master/min-window-substring-optimized.js
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    // check if we need to do any work at all...
    if(s.length === 0 || t.length === 0) return '';

    // define some vars
    var chars = Array(128).fill(0),                             // count target characters
        f = [],                                                 // filtered list
        flen,                                                   // filtered list length
        tlen = t.length,                                        // number of target chars
        a = '',                                                 // the a
        head = 0,                                               // right pointer
        tail = 0,                                               // left pointer
        missing = 0;                                            // number of target chars missing
                                                                // from the current window


    // keep track of target characters in play
    for(let k = 0; k < t.length; k++) {
        chars[t.charCodeAt(k)]++;
        missing++;
    }

    // Use a filtered list of characters, not the whole "s" string.
    // "f" will contain ONLY the positions of the target characters
    // in the "s" string. We will iterate over this filtered search
    // space and not the full "s" length.
    for(let k = 0; k < s.length; k++) {
        if(t.indexOf(s[k]) > -1) f.push(k);
    }

    flen = f.length;
    
    // Slide across the search space  >>~-->
    // Alternating movement of the head and tail positions
    // gradually to the right.
    while(head < flen) {

        if(tail > head) break;                              // Tail can't come before the head.

        if(chars[s.charCodeAt(f[head])]-- > 0) missing--;   // Account for the new, "head positioned"
                                                            // target character. It is no longer "missing"
                                                            // from the current solution candidate.

        // If we count that no target characters
        // are missing, we have an answer.
        while(missing === 0) {
            a = !a                                      // if no answer is set, use the new one
                || a.length > (f[head] - f[tail])       // if there's answer, but it's longer 
                                                        // than our new one, use the new one

                    ?  s.slice(f[tail],(f[head]+1))     // <--<< new answer 
                    : a;                                // doesn't fit the above conditions?
                                                        // keep the old answer.
                
            if(a.length === tlen) return a;             // if our current answer is the same
                                                        // size as the target string, we cannot
                                                        // discover a better answer. return it.

            // contract the "tail position" toward the head...
            tail++;

            if(chars[s.charCodeAt(f[tail-1])]++ > -1) missing++;    // Since we "contracted" tail indward,
                                                                    // we lost a target character from
                                                                    // the tail end. We are now "missing"
                                                                    // a target character.
        } 

        // expand the "head position" to the right...
        head++;
    }
    
    return a;
};

var S = "ADOBECODEBAXNCYOUOUHIOABCIUOI";
var T = "ABCY";

console.log(minWindow(S, T));