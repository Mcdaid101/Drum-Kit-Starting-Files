document.addEventListener('DOMContentLoaded', function () {

const guitarSound = new Audio('sounds/guitar.wav');
const drumSound = new Audio('sounds/drum.wav');
const bassSound = new Audio('sounds/bass.wav');
const fluteSound = new Audio('sounds/flute.wav');
const pianoSound = new Audio('sounds/piano.wav');
const saxSound = new Audio('sounds/sax.wav');

const playSoundButton = document.getElementById('playSoundButton');

playSoundButton.addEventListener('click', function (){
    const soundToPlay =  playSoundButton.dataset.sound;
        
        switch (soundToPlay) {
            case "guitarSound":
                guitarSound.play;
                break;
            
            case "drum":
                drumSound.play();
                break;
            
            case "bass":
                bassSound.play();
                break;

            case "flute":
                fluteSound.play();
                break;

            case "piano":
                pianoSound.play();
                break;

            case "sax":
                saxSound.play();
                break;
        
            default:
                console.log("error")
                break;
        }

    });

});