const name ={id : 12, village : 'pakshail'}
const nameSringify = JSON.stringify(name);
console.log(nameSringify)

const nameParse = JSON.parse(nameSringify);
console.log(nameParse);