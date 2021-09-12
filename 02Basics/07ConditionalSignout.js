//Show user a signout button if he is authenticated,
//otherwise show him option to Login/Signup

var authenticated=true;

// if(authenticated){
//     console.log("Show signout button");
// }else{
//     console.log("Show Login Options");
// }

authenticated ? console.log("Show signout button"):console.log("Show login options");