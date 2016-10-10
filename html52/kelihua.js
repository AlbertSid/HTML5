(function(global) {
    var curryFunc = function(func, len) {
        len = len || func.length;
        var args = [];
        if (len === 0) {
            return func.apply(null);
        }
        return function() {
            [].push.apply(args, [].slice.apply(arguments));
            if (args.length >= len) {
                return func.apply(null, args);
            }
            return arguments.callee;
        };
    };
    global.curryFunc = curryFunc;
})(this);
function add(x, y, z) {
    return x + y + z;
}
console.log("result 1:", curryFunc(add)(1, 2)(3));
console.log("result 2:", curryFunc(add)(1)(2, 3));
console.log("result 3:", curryFunc(add)(1)(3)(2));
console.log("result 4:", curryFunc(add)(1,2,3));
function add(x, y, z) {
    return x * y * z;
}
console.log("result 1:", curryFunc(add)(2, 4)(6));
console.log("result 2:", curryFunc(add)(2)(4, 6));
console.log("result 3:", curryFunc(add)(2)(6)(4));
console.log("result 4:", curryFunc(add)(2,4,6));
function hello() {
    return "hello";
}
console.log(curryFunc(hello));