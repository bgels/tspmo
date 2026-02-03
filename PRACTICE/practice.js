// DOM
/*
document.querySelector
.innerText

change the text of the title, event listener, click

.appendChild()
.createElement('button')

array of objects
[{ name: "Alex" }, { name: "Sam" }]
loop and creates a paragraph for each name on the screen.
*/

const title = document.querySelectorAll("p");

title.forEach((element) => {
    element.textContent = "hello";
})