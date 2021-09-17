let arr = [1, 2, 3, 5];
let sum = 0;
const add = num => {
    sum = sum + num;
}

for (const i of arr) {
    add(i);
}
console.log(sum);