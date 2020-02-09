console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");
const status = document.getElementById("game-status");

function onClick(event) {
    console.log("Event of type", event.type);
    const cl = event.currentTarget;
    console.log("My id is", cl.id);

    const num_str=cl.id.slice(2);
    const num = parseInt(num_str);
    // если написано не число - ничего не делаем
    if (isNaN(num))
    {
        return; 
    }
console.log("Here is",num ); 
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
    //console.log(cl.id);
    cl.addEventListener("click", onClick);
}
}

function main (){
    console.log("Running main");
    addListeners();
}
main();