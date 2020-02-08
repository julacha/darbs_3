console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");

function onClick(){
console.log("Clicked some button");
}


function addListeners() {
   console.log("Adding Listeners");
   console.log(cell.length);
for (let i=0; i < cell.length; i++){
    const cl = cell[i];
    console.log(cl.id);
    cl.addEventListener("click", onClick);

}


}

function main (){
    console.log("Running main");
    addListeners();
}

main();