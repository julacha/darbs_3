console.log("Started FizzBuzz");

function addListeners() {
   console.log("Adding Listeners");
   const cell = document.getElementsByClassName("cell");
   console.log(cell.length);
}

function main (){
    console.log("Running main");
    addListeners();
}

main();