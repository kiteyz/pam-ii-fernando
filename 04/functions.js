const oddeven = (number) => {
    let calc = number % 2;

    return calc == 1 ? "Número Impar" : "Número Par";
}

console.log(oddeven(17));
console.log(oddeven(64));
console.log(oddeven(1500));