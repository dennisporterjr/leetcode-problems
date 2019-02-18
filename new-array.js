var arr = [];
var len = 100;

for (var i = 0; i < len; i++) {
    var elem = Math.ceil(Math.random() * 100);
    // no dupes
    if (arr.indexOf(elem) === -1) {
        arr.push(elem);
    }
}


console.log(arr.sort((a,b) => { return a-b; }));
