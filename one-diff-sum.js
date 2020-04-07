
// https://programmingpraxis.com/2020/04/03/homework-3/

function arraysEqual(a, b) {
    return (a || "").toString() == (b || "").toString();
}

function oneDiffSum(goal, solutionLength) {
    // pick a number
    // iterate over it's combinations with the next largest number
    // check to see if any of those combinations add up to our number
    var arr = []; var num = 0, len = Math.floor(goal/2);

    for(; num < len; num++) {
        var numPlusOne = num + 1,
            maxSetSum = numPlusOne * solutionLength,
            minSetSum = num * solutionLength;

        if(maxSetSum < goal) continue;

        var bridge = goal - minSetSum;

        for(var k = 0; k < solutionLength; k++) {
            arr.push(k < bridge ? numPlusOne : num);
        }

        break;
    }

    if(goal === 0) {
        for(var k = 0; k < solutionLength; k++) {
            arr.push(0);
        }
    }

    return arr;
}

/**********************
 * TESTS ///          *
***********************/

var tests = [
    { args: [26, 7],    expected: [4, 4, 4, 4, 4, 3, 3 ] },
    { args: [18,3],     expected: [6, 6, 6] },
    { args: [5,10],     expected: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0] },
    { args: [0,2],      expected: [0, 0] }
];

tests.forEach((test, i) => {
    var actual = oneDiffSum.apply(null, test.args);

    if (arraysEqual(actual, test.expected)) {
        console.log('passed', test.args);
    } else {
        console.log('failed', test.args);
    }
});
