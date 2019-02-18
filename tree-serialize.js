function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.right.left = new TreeNode(2);
a.right.right = new TreeNode(1);

var serialize = function(root) {

    return JSON.stringify(getObj(root));

    function getObj (node) {
        var obj = {};

        if (node === null) return null;

        obj.val = node.val;
        obj.left = node.left === null ? null : getObj(node.left);
        obj.right = node.right === null ? null : getObj(node.right);

        return obj;
    }
};

var deserialize = function(str) {
    var obj = JSON.parse(str);

    return makeTree(obj);

    function makeTree (node) {
        if (node === null) return null;

        var tree = new TreeNode(node.val);

        tree.left = node.left === null ? null : makeTree(node.left);
        tree.right = node.right === null ? null : makeTree(node.right);

        return tree;
    }
};

//console.log(serialize(a));
console.log(deserialize(serialize(a)));