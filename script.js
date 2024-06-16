//Declaration
const generateButton = document.querySelector(".generate");
const clearButton = document.querySelector(".clear");
const copyButton = document.querySelector(".copy");
const input = document.querySelector("input");
const result = document.querySelector("textarea");


let amount = 0;
let paragraphResult = "";



function generateParagraphs() {
const loremIpsum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum reprehenderit nostrum sunt temporibus, adipisci ratione commodi beatae, ut placeat suscipit, est quibusdam sequi ipsam obcaecati id autem."
const newParagraphs = parseInt(amount,10);
paragraphResult = ""; // clear before
for(let i = 0 ; i<newParagraphs;i++) {
    paragraphResult+= `${loremIpsum}\n\n`; // n= new line
}
result.value = paragraphResult
}

function clearText() {
    paragraphResult = "";
    amount = 0;
    result.value = paragraphResult;
    input.value = amount;
}

function copyText() {
    // check if there is text to copy
    if(paragraphResult.trim() === "") {
        alert("There is no text to copy");
        return;
    }
    else{
        navigator.clipboard.writeText(paragraphResult) 

        .then(() =>{
            alert("text was coppied");
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}




//events
generateButton.addEventListener("click" , generateParagraphs);
clearButton.addEventListener("click" , clearText);
copyButton.addEventListener("click" , copyText);;
input.addEventListener("change" , (e) =>amount = e.target.value);