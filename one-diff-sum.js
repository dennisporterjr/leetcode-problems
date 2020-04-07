// https://programmingpraxis.com/2020/04/03/homework-3/


function oneDiffSum(goal, solutionLength) {
    var solution = [], len = Math.floor(goal/2);

    // Start checking for solutions at 0...
    for(let num = 0; num < len; num++) {
        var numPlusOne = num + 1,
            // given a number set.. 
            //      1) ..with a length of exactly "solutionLength"..
            //      2) ..with only two distinct numbers which have
            //           a difference of 0 or 1 (ie 1 and 2, or 12 and 13, or 7 and 7).

            // The max sum of those numbers is the product of the bigger number and "solutionLength"
            maxSetSum = numPlusOne * solutionLength,
            // The min sum of those numbers is the product of the smaller number and "solutionLength"
            minSetSum = num * solutionLength,
            // This number represents how much the maxSetSum "overshoots" the goal by
            overshoot;

        // if the max sum of the set doesn't add up to the goal, then there's 
        // no use in checking further..
        if(maxSetSum <= goal) continue;

        overshoot = goal - minSetSum;

        for(let k = 0; k < solutionLength; k++) {
            solution.push(k < overshoot ? numPlusOne : num);
        }

        break;
    }

    if(goal === 0) {
        for(var k = 0; k < solutionLength; k++) {
            solution.push(0);
        }
    }

    return solution;
}

// *********************************************
// ** Utilities, Tests, & Commandline Helpers **
// *********************************************

////>>>>

function arraysEqual(a, b) {
    return (a || "").toString() == (b || "").toString();
}

// Run function if arguments are passed
if(process.argv[2] && process.argv[3]) {
    console.log("\n******************************************");

    console.log("input: \t\t",  process.argv.slice(2).map(x => Number(x)))
    console.log("output: \t",   oneDiffSum(process.argv[2], process.argv[3]));

    console.log("******************************************\n");
} else {
    // or else just run the tests...

    console.log("\n**********************");
    console.log("* TESTS ///          *");
    console.log("**********************\n");

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

    console.log("\n");
}

