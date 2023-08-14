//call back function
const calculate = (a,b,operation) => {
    return operation(a,b);
}
const addition = calculate(3,4, function(num1,num2){
    return num1+num2;
})
console.log(addition);

//method 2
const sub = (a,b) => a-b;

const subresult = calculate(4,3,sub);
console.log(subresult);

//method 3
function multiply(a,b){
    return a*b;
}
const multiply_result = calculate(3,4,multiply);
console.log(multiply_result);

