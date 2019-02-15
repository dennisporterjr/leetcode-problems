var con = console;
var log = con.log;
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var chars = [];
    var charsLen = 0;
    var j = 0;
    var noSpaces = [];

    str = str.trim();
    if (str === " " || str === "") return str;

    chars = str.split(" ");
    charsLen = chars.length;

    noSpaces = chars.filter(function (value, index) {
        return value !== "";
    });

    return noSpaces.reverse().join(" ");
};

con.clear();
var args = [
    {
        str: "the sky is blue",
    },
    {
        str: "   a   b ",
    },
];

for (var k = 0; k < args.length; k++) {
    log("str:", "'" + args[k].str + "'");
    log("returns:", "'" + reverseWords(args[k].str) + "'");
    log("\n");
}
