var arr = [];
var len = 9999;

var str = "[ ";
for (var i = 0; i < len; i++) {
    str += Math.ceil(Math.random() * 100);
    str += (i !== len-1) ? ", ": "";
    str += (i%30 === 0) ? "\n" : "";
}

str += "]";

console.log(str);
