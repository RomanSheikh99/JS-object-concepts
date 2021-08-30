
const khoros = {
    money: 0,
    lost: function(taka){
        let newMoney = this.money - taka;
        return newMoney;
    }
}



const shuvon = {
    id: 101,
    name: 'abu taleb shuvon',
    money: 8000,
}


const amin = {
    id: 106,
    name: 'syed amin',
    money: 3900
}


const duha = {
    id: 103,
    name: 'sangid duha',
    money: 4000,
}

// use of bind method 
// let shuvonErKhoros = khoros.lost.bind(shuvon);
// let aminErKhoros = khoros.lost.bind(amin);
// let duhaErKhoros = khoros.lost.bind(duha);

// use of call method
// let shuvonErKhoros = khoros.lost.call(shuvon, 369);
// let aminErKhoros = khoros.lost.call(amin, 772);
// let duhaErKhoros = khoros.lost.call(duha, 982);

// use of apply method
let shuvonErKhoros = khoros.lost.apply(shuvon, [369]);
let aminErKhoros = khoros.lost.apply(amin, [772]);
let duhaErKhoros = khoros.lost.apply(duha, [982]);


console.log(shuvonErKhoros);
console.log(aminErKhoros);
console.log(duhaErKhoros);