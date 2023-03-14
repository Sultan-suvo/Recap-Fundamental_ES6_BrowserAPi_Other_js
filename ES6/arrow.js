const age = a => a * a;
console.log(age(2));

const add = (a, b) => a + b;
console.log(add(2, 7));

const multiply = (a, b, c) => {
    const sum = a + b;
    const multify = sum * c;
    return multify
}
console.log(multiply(2, 7, 4))