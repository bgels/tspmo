// 1. Select the elements and cast them to their specific types
const title = document.getElementById('main-title');
const description = document.querySelector('.description');
const button = document.getElementById('action-btn');
// 2. Add an event listener to the button
button.addEventListener('click', () => {
    // 3. Manipulate the content
    title.textContent = "DOM Manipulated!";
    // 4. Manipulate styles
    description.innerText = "The button was clicked and the TypeScript logic executed.";
    description.style.color = "blue";
    description.style.fontWeight = "bold";
    // 5. Toggle a class or disable the button
    button.disabled = true;
    button.textContent = "Done!";
});
export {};
//# sourceMappingURL=practice.js.map