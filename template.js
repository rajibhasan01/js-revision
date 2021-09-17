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

let details = `${name[1].Ename.firstName} ${name[1].Ename.lastName} is a good boy. his parents phone number is ${name[1].parents.mobileNumber[0]}`;
console.log(details);