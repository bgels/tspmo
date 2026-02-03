
const tsTitle = document.querySelector<HTMLHeadingElement>("#title")!;
const tsStatusText = document.querySelector<HTMLParagraphElement>("#status-text")!;
const tsItemList = document.querySelector<HTMLDivElement>("#item-list")!;
const tsActionBtn = document.querySelector<HTMLButtonElement>("#action-btn")!;

interface User {
    id: number;
    text: string;
    isActive?: boolean; // Optional: not every user needs this
}


function createItem(user: User): void {
    const newItem = document.createElement("div");

    if (user.isActive) {
        newItem.innerText = `ACTIVE: ${user.text}`;
        newItem.style.fontWeight = "bold";
    } else {
        newItem.innerText = user.text;
    }

    tsItemList.appendChild(newItem);
}


tsActionBtn.addEventListener("click", () => {
    tsTitle.innerText = "Hello TypeScript!";
    
    const newUser: User = { 
        id: 1, 
        text: "TypeScript User", 
        isActive: true 
    };

    createItem(newUser);
});


const ghostElement = document.querySelector<HTMLImageElement>("#ghost-element");

if (ghostElement) {
    ghostElement.src = "test.png"; // Safe now!
} else {
    console.log("Ghost element not found, skipping...");
}