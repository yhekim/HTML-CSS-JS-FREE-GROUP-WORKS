var degerler;


const header = document.querySelector(".header");
const container = document.querySelector(".container");
const display = document.querySelector(".display");
console.log(display)
var deger = "";
var text;


header.addEventListener("click", (e) => {

    e.preventDefault()
    if (e.target.classList.contains("renkDegistirHEX")) {
        renkYaratHEX();
        container.style.background = text;
        display.innerHTML = text;


    } else if (e.target.classList.contains("renkDegistirRGB")) {
        arkaplanDegistir()
        container.style.background = deger;
        display.innerHTML = deger;
    } else if (e.target.classList.contains("renkDegistir")) {
        setInterval(function() {
            arkaplanDegistir()
            container.style.background = deger;
            display.innerHTML = deger;
        }, 1000)
    }





})

function arkaplanDegistir() {
    deger = `rgb(${renkAta()},${renkAta()},${renkAta()})`;
    return deger;




}

function renkAta() {
    var renk = Math.floor(Math.random() * 255 + 1);

    return renk;

}

function renkYaratHEX() {
    var a = "ABCDEF0123456789";
    text = "#";
    for (var i = 0; i < 6; i++) {
        var random = Math.round(Math.random() * 15)
        text += a.charAt(random);

    }
    return text;

}