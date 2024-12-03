const fetchCheckbox = document.querySelectorAll('.checkbox');
//console.log(fetchCheckbox);

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
//fetchCheckbox.addEventListener("click", handleColor);
//fetchCheckbox((field) => field.addEventListener('onclick', handleColor));
 
const dynamicDisplay = document.getElementById('tomDiv');

function handleColor(e) {
    const colorField = document.querySelector('input[name="color"]');
    const contentField = document.querySelector('input[name="content"]');
    if (colorField) {
        tomDiv.style.backgroundColor = colorField.value;
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