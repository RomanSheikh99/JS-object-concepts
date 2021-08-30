const myObject = {
    id: 23,
    name: 'roman',
    scl: 'msps',
    clg: 'hpi'
}

myObject.scoud = true;

const allPropertys = Object.keys(myObject);
// console.log(allPropertys);

const allValues = Object.values(myObject);
// console.log(allValues);

const allPairs = Object.entries(myObject);
// console.log(allPairs);

delete myObject.scoud;
// console.log(myObject);
myObject.newclg = 'mpt'
console.log(myObject);
Object.seal(myObject);
delete myObject.clg;
myObject.clg = 'HPI'

console.log(myObject);


Object.freeze(myObject);
delete myObject.clg;
myObject.clg = 'tPI'
// console.log(myObject);