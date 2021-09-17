const myFriends = {
    
    details:{
        id: 1,
        name: "Rajib Hasan", 
        age: 26,
 }
}

// const {id, name, age} = myFriends.details;
// console.log(id, name, age);

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

const [data] = name;
console.log(data);
