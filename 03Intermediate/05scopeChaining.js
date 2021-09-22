var name="saba";

console.log("line number 3 ",name);

function sayName(){
    var name="Mr H";
    console.log("line number 6",name);
    sayNameTwo();

    function sayNameTwo(){
        var name="Mr. B"
        console.log("line number 11",name);
    }
}

sayName();