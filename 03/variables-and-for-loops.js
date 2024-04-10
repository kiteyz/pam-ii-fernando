let n = 2;
let t = "oi";

console.log(typeof n)
console.log(typeof t)

let a = [0, 1, 1, 2, 3, 5, 8, 13, 21];

console.log(typeof a)

let o = {
    name: "Fernando",
    age: "17"
};

console.log(typeof o)


a.forEach((el) => console.log(`Elemento: ${el}`));

console.log(o);
console.log(o.name, "tem", o.age, "anos");