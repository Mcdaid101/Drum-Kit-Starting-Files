var numberOfInstruments = document.querySelectorAll(".instrument").length;

for(i=0; i<numberOfInstruments; i++) {
    document.querySelectorAll(".instrument")[i].addEventListener("click", function() {
        alert("You clicked me!")
    });
}



