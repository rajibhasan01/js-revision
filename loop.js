let i = 9;
// while(i){
//     console.log(i);
//     i--;
// }


let PFName = "Abdur Razzak";
let PLName = "Howlader";

const obj = {
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
};

for(const k in obj){
    for(const j in k){
        console.log(j);
    }
}