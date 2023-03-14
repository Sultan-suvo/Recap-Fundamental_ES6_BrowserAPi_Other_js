const student ={
    name  : 'suvo',
    age : 43,
    isSingle : true,
    education : {
        ssc : 2012,
        hsc : 303
    },
    idol : [{name : 'shah-ruk-khan'}, {age : 33}]
}

const {name} = student;
console.log(name)


const numbers = [12, 44, 65, 24, 35];
const [one, two] = numbers;
console.log(two);