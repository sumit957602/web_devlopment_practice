//Normal function
function greet(a){
    for(let i=0;i<a;i++){
    console.log("Hello world");}
    console.log(a);
}
greet(3);

//arrow function
const greet1 = (a) => {
    for(let i=0;i<a;i++){
        console.log("Hello world");}
        console.log(++a);
}
greet1(3)

const square = (num) => num*num      //it returns only one expressions