const fetchCheckbox = document.querySelectorAll('.checkbox');
//Deklarerar en const variabel som vi tilldelar alla checkbox element 
//och skapar ett nodelist objekt
//https://www.w3schools.com/js/js_htmldom_nodelist.asp

const textFields = document.getElementsByClassName('textfield');
//Deklarerar en const variabel som vi tilldelar alla element som har 
//klassnamnet textfield och skapar ett HTMLCollection objekt
//https://www.w3schools.com/js/js_htmldom_collections.asp

const knappElement = document.getElementsByTagName("button")[0];
//Deklarerar en const variabel som vi tilldelar första elementet som är en button 
//och skapar ett HTMLElement objekt
//https://www.w3schools.com/js/js_htmldom_collections.asp

const tomDiv= document.getElementById("tomDiv");
//Deklarerar en const variabel som vi tilldelar första elementet
//som har id tomDiv

//Använder fyra olika DOM-funktioner, uppgift 4

function targetFunction(e){
    //Funktionen targetFunction körs när ett event triggas.
    console.log("Target: ", e.target);
    //Skriver ut det element som triggat eventet (e.target) till konsolen.
    
    const inputFalt = e.target.name;
    //Hämtar name-attributet från elementet som triggas av eventet och lagrar det i en variabel
    if(inputFalt === 'content'){
        //Kontrollerar om inputFalt är lika med content
        tomDiv.innerHTML = e.target.value;
        //Om vilkoret är sant hämtar vi värdet och tilldelar det värdet till tomDiv elementet
        //Vi anvädet innerHTML för ändra innehållet i ett HTML element och i detta tomDiv
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
    tomDiv.remove();
}); 