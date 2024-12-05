const fetchCheckbox = document.querySelectorAll('.checkbox');
//Deklarerar en const variabel som vi tilldelar alla checkbox element

const textFields = document.getElementsByClassName('textfield');
console.log(textFields)

const knappElement = document.getElementsByTagName("button")[0];
console.log(knappElement);

const tomDiv= document.getElementById("tomDiv");
console.log(tomDiv);
//Använder fyra olika DOM-funktioner, uppgift 4


function targetFunction(e){
    //Funktionsdeklartion
    console.log("Target: ", e.target);
    
    const inputFalt = e.target.name;

    if(inputFalt === 'content'){
        tomDiv.innerHTML = e.target.value;
    }
    //uppgift 5
}

function handleColor(e){
    const colorField = e.target.value;
    if (colorField) {
        tomDiv.style.backgroundColor = colorField;
    } 

}

function handleColor() {
    const colorField = textFields[0];
    const colorValue = colorField.value;
    if (colorField) {
        tomDiv.style.backgroundColor = colorValue;
    } 
}

fetchCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", handleColor);
});  

for (let i = 0; i < textFields.length; i++) {
    //For-loop för htmlcollection objekt
    textFields[i].addEventListener("input", targetFunction);
}  

knappElement.addEventListener("click", () => {
    tomDiv.style.display = "none";
}); 