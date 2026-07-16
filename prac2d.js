let number = [10,20,30,40,50];

let double = number.map(num => num * 2);

let greater25 = number.filter(num => num > 25);

let total  = number.reduce((sum,num)=> sum + num , 0);

console.log("Original Array:",number);
console.log("Map:",double);
console.log("Filter:",greater25);
console.log("Reduce:",total);
console.log("Afsha");





