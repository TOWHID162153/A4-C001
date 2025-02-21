const votes = ["mango","banana","mango","banana","mango","banana","mango","banana","mango","mango","mango","mango","mango","mango",]

for(vote of votes){
    console.log(vote);
}

let mangoParty = votes.filter(vote => vote === "mango").length;
let bananaParty = votes.filter(vote => vote === "banana").length;q
console.log(mangoParty);
console.log(mangoParty);


console.log(typeof votes);
console.log(votes.length);