let output=[]
let a=1
function fizzBuzz() {
    if (a % 3 === 0 && a % 5 === 0) {
            output.push("FizzBuzz");
        } 
    else if (a % 3 === 0) {
            output.push("Fizz");
        } 
    else if (a % 5 === 0) {
            output.push("Buzz");
        } 
    else {
            output.push(a);
        }
    a++
       console.log(output)
}
