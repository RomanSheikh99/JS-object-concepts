
const first = {a: 1, b: 2, c: 3};
const second = { a: 1, b: 2, c: 3};
const second2 = { b: 2, a: 1, c: 3, d:4};
const third = first;

const me = {
    id: 12,
    name: 'roman',
    age: 17,
    dream: 'dev',
}

const myFriend = {
    id: 13,
    name: 'shubon',
    age: 17,
    dream: 'dev'
}

// genarel way;
// console.log(first === second);
// console.log(first === third);

// stringify way

let obj1 = JSON.stringify(first);
let obj2 = JSON.stringify(second);
// console.log(obj1 === obj2);


let obj3 = JSON.stringify(third);
let obj4 = JSON.stringify(second2);
// console.log(obj3 === obj4);

// advence way
function comparisonObject(obj1,obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return 'jiboneo mile na '
    }
    for(let pro in obj1){
        // console.log(pro+' - '+obj1[pro]+' <===> '+obj2[pro]+' - '+pro);
        if(obj1[pro] !== obj2[pro]){
            return 'this two are not match';
        }
    }
    return 'it match';
}

let result = comparisonObject(me,myFriend);

console.log(result);