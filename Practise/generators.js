function* numberGen(){
    let i=0;

    while(true){
        yield i++;
    }
}

const gen=numberGen();
console.log
