console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");

function onClick(event) {
    console.log("Event of type", event.type);
    console.log("My id is", event.currentTarget.id);
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