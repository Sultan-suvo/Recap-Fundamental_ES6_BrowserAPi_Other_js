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

const temolate = `my name is ${student.name}`;
console.log(temolate);