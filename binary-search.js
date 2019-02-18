var called = 0;
var binarySearch = function (sorted_arr, search, offset) {
    var len = sorted_arr.length;
    var half_index = 0;
    called++;

    offset = offset || 0;

    half_index = Math.floor(len/2);

    if (sorted_arr[half_index] === search) {
        console.log("returned from mid");
        return half_index + offset;
    } else if(len === 1) {
        return false;
    }

    if (search < sorted_arr[half_index]) {
        return binarySearch(sorted_arr.slice(0, half_index), search, offset);
    } else {
        return binarySearch(sorted_arr.slice(half_index), search, half_index+offset);
    }
};

var arr = [1,2,4,5,6,8,10,11,12,13,17,18,19,21,22,23,24,25,26,27,28,29,30,31,33,35,37,38,41,42,45,46,47,49,51,53,55,57,58,59,60,61,63,65,66,68,70,71,72,73,74,76,77,78,80,83,88,89,90,92,93,94,96,97,100];
var needle = parseInt(process.argv[2]);
console.log("search for "+needle+" in array...");
var ret = binarySearch(arr, needle);
console.log({called});

if (ret === false) {
    console.log(needle + " not found.");
} else {
    console.log(needle + " was found at index " + ret);
}