// for( let i=0;i<10;i++){
//     console.log(i);
// }

// const myStates = ["Rajasthan","New Delhi","Assam",1947,"Goa","Karnataka","Maharastra"];


// for(let i=0;i<myStates.length;i++){
//     if(typeof myStates[i]!=='string')
//     continue;
//     console.log(myStates[i]);
// }

// console.log("--------Break-------");
// for(let i=0;i<myStates.length;i++){
//     if(typeof myStates[i]!=='string')
//     break;
//     console.log(myStates[i]);
// }


console.log("--------WHILE & DO-WHILE LOOP--------");

const myStates = ["Rajasthan","New Delhi","Assam",1947,"Goa","Karnataka","Maharastra"];
// let i=0;
// while(i<myStates.length){
//     console.log(myStates[i]);
//     i++;
// }
let i=0;
do{
    console.log(myStates[i]);
     i++;
}while(i<myStates.length)