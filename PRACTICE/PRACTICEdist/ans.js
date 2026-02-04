const tsTitle = document.querySelector("#title");
const tsStatusText = document.querySelector("#status-text");
const tsItemList = document.querySelector("#item-list");
const tsActionBtn = document.querySelector("#action-btn");
function createItem(user) {
    const newItem = document.createElement("div");
    if (user.isActive) {
        newItem.innerText = `ACTIVE: ${user.text}`;
        newItem.style.fontWeight = "bold";
    }
    else {
        newItem.innerText = user.text;
    }
    tsItemList.appendChild(newItem);
}
tsActionBtn.addEventListener("click", () => {
    tsTitle.innerText = "Hello TypeScript!";
    const newUser = {
        id: 1,
        text: "TypeScript User",
        isActive: true
    };
    createItem(newUser);
});
const ghostElement = document.querySelector("#ghost-element");
if (ghostElement) {
    ghostElement.src = "test.png"; // Safe now!
}
else {
    console.log("Ghost element not found, skipping...");
}
export {};
//# sourceMappingURL=ans.js.map