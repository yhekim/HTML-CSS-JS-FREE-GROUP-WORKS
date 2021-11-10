const inputNumber = document.querySelector(".number");
var number = inputNumber.value;
console.log(number)
number = Number(number);
let deger = 0;
const operation = document.querySelector(".operation");
operation.addEventListener("click", (e) => {

    if (e.target.classList.contains("arttir")) {

        number++;
        inputNumber.value = number;



    } else if (e.target.classList.contains("azalt")) {
        number--;
        inputNumber.value = number;


    } else {
        inputNumber.value = "";
    }



})