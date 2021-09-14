const fish = ["Snapper", "Hoki", "Tarakihi", ];
const addBtn = document.querySelector("#addButton");
const submitBtn = document.querySelector("#submitButton")
let inputField = document.querySelector("#textInput")
function chooseName(value) { // name picker from array
    let nameCount = value.length;
    let chosenName = value[random(nameCount)];
    if (chosenName == undefined) {
        chooseName(value)
    } else {
        return chosenName;
    }
    
}
function random(start, end) {
    if (end == undefined) {
        end = start;
        start = 0;
    }
    return (Math.floor(Math.random() * ((end) - start))) + start;
}
let arrayTest = ''
let arrayTestContent
function arrayCreator() {
    inputField = document.querySelector("#textInput");
    arrayTest += inputField.value + ", ";
    inputField.value = ""
}
function arrayTestContentCreator() {
    let arrayTestContent = `[${arrayTest}]`
    return arrayTestContent
}

addBtn.onclick = function() {
    arrayCreator()
    console.log(hi)
}