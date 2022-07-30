let elInputInvert = document.querySelector(".inputInvert")
let elOutputInvert = document.querySelector(".outputInvert")
let elInputLower = document.querySelector(".inputUpper")
let elOutputLower = document.querySelector(".outputUpper")
let elInputUpper = document.querySelector(".inputLower")
let elOutputUpper = document.querySelector(".outputLower")


elInputInvert.addEventListener("input", function () {
    invertcase(elInputInvert.value.split(""))
})
elInputUpper.addEventListener("input", function () {
    toLowercase(elInputUpper.value.split(""))
})
elInputLower.addEventListener("input", function () {
    toUppercase(elInputLower.value.split(""))
})

function invertcase(splittedInput) {
    for (var i = 0; i < splittedInput.length; i++) {
        if (splittedInput[i] === splittedInput[i].toLowerCase()) {
            splittedInput[i] = splittedInput[i].toUpperCase();
        } else {
            splittedInput[i] = splittedInput[i].toLowerCase();
        }
    }
    elOutputInvert.textContent = splittedInput.join("");
}


function toUppercase(splittedInput) {
    for (var i = 0; i < splittedInput.length; i++) {
        splittedInput[i] = splittedInput[i].toUpperCase();
    }

    elOutputLower.textContent = splittedInput.join("");
}



function toLowercase(splittedInput) {
    for (var i = 0; i < splittedInput.length; i++) {
        splittedInput[i] = splittedInput[i].toLowerCase()
    }
    elOutputUpper.textContent = splittedInput.join("");
}