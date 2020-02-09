console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");
const reset = document.getElementById("Resetbtn");

function onClick(event) {
    console.log("Event of type", event.type);
    const cl = event.currentTarget;
    console.log("My id is", cl.id);
    
    const num_str=cl.id.slice(2);
    const num = parseInt(num_str);
    if (isNaN(num))
    {
        return; 
    } 
console.log("My nuber is",num ); 
//console.log(`onClick${i}`);
if (num % 5 === 0 && num % 3 === 0) {
cl.classList.add("fizzbuzz_selected");
console.log("Here is fizzbuzz");
}
else if (num % 3 == 0) {
    cl.classList.add("fizz_selected");
    console.log("Here is fizz");    
}
else if (num % 5 == 0) {
    cl.classList.add("buzz_selected"); 
    console.log("Here is buzz");   
}
}


function addListeners() {
   console.log("Adding Listeners");
   console.log(cell.length);
for (let i=0; i < cell.length; i++){
    const cl = cell[i]; 
    console.log(cl.id);
    cl.addEventListener("click", onClick)
    reset.addEventListener("click", onReset);
}
}

function onReset() {
for (let i=0; i < cell.length; i++){
    const c = cell[i];
    c.classList.remove("buzz_selected");
    c.classList.remove("fizz_selected");
    c.classList.remove("fizzbuzz_selected");
    console.log("Resetting Game");
}
}
    
function main (){
    console.log("Running main");
    addListeners();
}
main();