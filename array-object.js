let PFName = "Abdur Razzak";
let PLName = "Howlader";

let name = [
    'Database',
    {
        Ename: {
            firstName: "Rajib",
            lastName: "Hasan"
        },
        id: 1,
        salary: 160000,
        parents: {
            Pname: {
                PFName,
                PLName
            },
            mobileNumber: ["01711587617", "01716236793"],
            profession: "Business"
        }
    },
]

console.log(name[1].parents?.Pname.PLName);


let arr = [1,2,3,5];
/* const p = arr.push("Hi");
console.log(arr);
const pt = arr.pop();
console.log(p);
console.log(pt); */
// console.log(arr);

// // const shift = arr.shift();
// const shift = arr.unshift(10);
// const index = arr.indexOf(3);
// const include = arr.includes(3);
// const arrSort = arr.sort();
// const slic = arr.splice(0,3);
// console.log(slic);
// // arr.length = 0;
// console.log(Array.isArray(arr));

// // console.log(shift);
// console.log(arr);

