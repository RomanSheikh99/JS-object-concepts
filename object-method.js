const student = {
    id: 32,
    name: 'sabbir',
    sub: ['bangla', 'english', 'math', 'chemistry'],
    bestFriend: {
        name: 'tusar',
        address: 'kaligat er buter goli'
    },
    addSub: function(sub){
        this.sub.push(sub);
        return this.sub;
    }
}

const ubdateSub = student.addSub('phygics');
console.log(ubdateSub);