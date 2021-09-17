let a = "let";
const b = "const";
var c = "var";

// let d = "global-let";
// const e = "global-const";
// var f = "global-var";


let i = [];



if (i) {
    // console.log(a);
    // console.log(b);
    // console.log(c);

    let d = "block-let";
    const e = "block-const";
    var f = "block-var";

    print(a, b, c, d, e, f);
    // console.log(d);
    // console.log(e);
    // console.log(f);
}

// console.log(d);
// console.log(e);
console.log(f);

/* 
while (i) {
    console.log(a);
    console.log(b);
    console.log(c);
    i = undefined;
}
*/
print(a, b, c);
function print(a, b, c) {
    let d = "block-let";
    const e = "block-const";
    var f = "block-var";
    console.log(a);
    console.log(b);
    console.log(c);
 


}
