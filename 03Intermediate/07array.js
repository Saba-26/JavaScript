var countries = ["India","USA","Japan","UAE"];

var states= new Array("Rajasthan","Karnataka","Delhi","Maharastra");

// console.log(states[2]);

// console.log(states.length);
states[0]="Haryana";
// console.log(states);

var user=["saba","saba@gmail.com",3,34,true];
console.log(user);

user.pop();
user.pop();
console.log(user);

user.unshift("NEW VALUE");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf("sa"));

console.log(Array.from("saba"));