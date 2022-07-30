let elInput = document.querySelector(".input")
let elOutput = document.querySelector(".output")
let abc = ["a", "b", "c", "d", "e", "f", "g", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]

elInput.addEventListener("input", function () {

    swapcase(elInput.value.split(""))
})



function swapcase(splittedInput) {
    for (var i = 0; i < splittedInput.length; i++) {
        if (splittedInput[i] === splittedInput[i].toLowerCase()) {
            splittedInput[i] = splittedInput[i].toUpperCase();
        } else {
            splittedInput[i] = splittedInput[i].toLowerCase();
        }
    }
    elOutput.textContent = splittedInput.join("");
}