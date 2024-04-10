let num1 = 2; 
const num2 = 3; 
var msg = "Óla amigos! esse é o número:";

console.log(msg , num1);
console.log(num1 + num2);
console.log(typeof num1);
console.log(typeof msg);

function sum() {
    n1 = 5;
    n2 = 2; 
    console.log("o Resultado é:", n1+n2);
};

sum();

function sumprmts () {
    let result = "O resultado é:" + (n1+n2);
    console.log(result)
};

sumprmts();

const test = (n) => {
    let result = n % 2;


if (result == 1){
    return "Número ímpar";
};

return "Número par";
}
console.log(test(2));
console.log(test(7));
