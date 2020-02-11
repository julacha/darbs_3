console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");
const reset = document.getElementById("Resetbtn");
const inputMin = document.getElementById("minInput");
const inputMax = document.getElementById("maxInput");
const sbtn = document.getElementById("subbtn");
const allFizzCells = document.getElementsByClassName("fizz");
const fizzbtn = document.getElementById("fzbtn");
const secondbtn = document.getElementsByClassName(".cell buzz");
const thirdbbtn = document.getElementsByClassName(".cell fizzbuzz");

inputMin.value = 1;
inputMax.value = 100;



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
    //new alternative loop
    // for (let el of allFizzCells) {
    //     el.classList.add("fizz_selected");
    // }
}

function addListeners() {
   console.log("Adding Listeners");
   console.log(cell.length);
   reset.addEventListener("click", onReset);
   fizzbtn.addEventListener("click", onShowAllFiz);
for (let i=0; i < cell.length; i++){
    const cl = cell[i]; 
    console.log(cl.id);
    cl.addEventListener("click", onClick)

    // const fizz = [i];
    // console.log("My class is fizz");


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