console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");
const reset = document.getElementById("Resetbtn");
const maxInp = document.querySelector("#maxInput");
const minInp = document.querySelector("#minInput");
const sbtn = document.getElementById("subbtn");
const fizzbtn = document.getElementById("fzbtn");
const buzzbtn = document.getElementById("bzbtn");
const fizzbuzzbtn = document.getElementById ("fzbzbtn"); 


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

console.log("My number is",num ); 
//console.log(`onClick${i}`);

if (num % 5 === 0 && num % 3 === 0) {
cl.classList.add("fizzbuzz_selected");
console.log("This is fizzbuzz");
}
else if (num % 3 == 0) {
    cl.classList.add("fizz_selected");
    console.log("This is fizz");    
}
else if (num % 5 == 0) {
    cl.classList.add("buzz_selected"); 
    console.log("This is buzz");   
} 
} 


function onShowAllFiz() {
    const allFizzCells = document.getElementsByClassName("fizz");
    for (let i=0;i<allFizzCells.length;i++) {
        allFizzCells[i].classList.add("fizz_selected");
    }           
 }

function onShowAllBuzz(){
    const allBuzzCells = document.getElementsByClassName("buzz");
    for (let i = 0; i<allBuzzCells.length; i++) {
        allBuzzCells[i].classList.add("buzz_selected");
    }
}

function onShowAllFizzBuzz () {
    const allFizzBuzzCells = document.getElementsByClassName ("fizzbuzz");
    for (let i=0; i<allFizzBuzzCells.length; i++){
    allFizzBuzzCells[i].classList.add("fizzbuzz_selected");
    }
} 
/* function onCreate(){

} */

function onClearAll() {
console.log (`My starting value is ${minInp.value}`);
console.log (`My ending Value is ${maxInp.value}`);    

   
for(let i=0; i < cell.length; i++){
    const cell = cell [i];
    if (cell < minInp && maxInp < cell){ 
    document.getElementsByClassName('cell').remove(cell[i]);   
    //cell[i].classList.remove(cell); 
 } 
 console.log("Clear other elements");  
}
}

function addListeners() {
   console.log("Adding Listeners");
   console.log(cell.length);
   reset.addEventListener("click", onReset);
   buzzbtn.addEventListener("click", onShowAllBuzz);
   fizzbtn.addEventListener("click", onShowAllFiz);
   fizzbuzzbtn.addEventListener("click", onShowAllFizzBuzz);
   sbtn.addEventListener("click", onClearAll);
   console.log("Submit data");
   minInp.addEventListener('click', onClick);
   maxInp.addEventListener('click', onClick);
   for (let i=0; i < cell.length; i++){
    const cl = cell[i]; 
    console.log(cl.id);
    cl.addEventListener("click", onClick); 
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