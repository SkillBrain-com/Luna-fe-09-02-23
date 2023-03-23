const counter = document.querySelector("#counter");
const counterButton = document.querySelector("#counterButton");

let counterValue = 0;
counter.innerText = `${counterValue}`;

counterButton.addEventListener("click", function(){
    counterValue += 1;
    counter.innerText = `${counterValue}`;
});
