const numbers = [12, 44, 65, 24, 35];

const map = numbers.map(n => {
 const result = n % 2;
    return result;
})
console.log(map);



const product= [
    {name:"laptop", prices:20},
    {name:"mobile", prices:10},
    {name:"tablet", prices:50},
]

product.forEach(p => console.log(p))



const produc= [
    {name:"laptop", prices:20},
    {name:"mobile", prices:10},
    {name:"tablet", prices:50},
]

product.filter(p => console.log(p))



const produ= [
    {name:"laptop", prices:20},
    {name:"mobile", prices:10},
    {name:"tablet", prices:50},
]

product.find(p => console.log(p.name=='l'))