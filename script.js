
let odstavec = document.querySelector("p");
odstavec.style.fontStyle = "16px";

function zmenaBarvy() {
    odstavec.style.color = "red";
    odstavec.classList.add("trida");
}

function tucny() {
    odstavec.style.fontWeight = "bold";
}

function zmenaVelikosti() {
    odstavec.style.fontSize = "17px";
}


/**************************************************/


let prehravac = document.querySelector(".mujPrehravac");

function spustAudio() {
    prehravac.play();
}

function pauzaAudio() {
    prehravac.pause();
}

function zpetAudio() {
    prehravac.currentTime = 0;
}


function volumeAudio0() {
    prehravac.volume = 0;
}

function volumeAudio05() {
    prehravac.volume = 0.5;
}

function volumeAudio1() {
    prehravac.volume = 1;
}





