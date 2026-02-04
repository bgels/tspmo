//CLASS
class AdventureGame {
    storyNodes;
    currentId;
    textElement;
    choicesElement;
    constructor(nodes) {
        this.storyNodes = nodes;
        this.currentId = 1;
        this.textElement = document.getElementById('story-text');
        this.choicesElement = document.getElementById('choices-container');
        this.render();
    }
    getNode(id) {
        return this.storyNodes.find((node) => node.id === id);
    }
    render() {
        const currentNode = this.getNode(this.currentId);
        if (!currentNode) {
            this.textElement.innerText = "Error: Story node not found!";
            return;
        }
        this.textElement.innerText = currentNode.text;
        this.choicesElement.innerHTML = '';
        if (currentNode.choices.length === 0) {
            const endMessage = document.createElement('div');
            endMessage.innerText = "The End.";
            endMessage.className = "text-center text-slate-400 italic mt-4";
            this.choicesElement.appendChild(endMessage);
            return;
        }
        currentNode.choices.forEach((choice) => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.className = "w-full p-4 text-left bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors border border-slate-600 shadow-md";
            button.onclick = () => {
                this.makeChoice(choice.nextId);
            };
            this.choicesElement.appendChild(button);
        });
    }
    makeChoice(nextId) {
        this.currentId = nextId;
        this.render();
    }
}
//DATA
const storyData = [
    {
        id: 1,
        text: "You stand at the entrance of a dark, mossy cave. The air is cold and you hear water dripping.",
        choices: [
            { text: "Light a torch and enter.", nextId: 2 },
            { text: "Walk away.", nextId: 3 },
        ],
    },
    {
        id: 2,
        text: "The torch illuminates a fork in the path. To the left, thick cobwebs block the way. To the right, you smell fresh air.",
        choices: [
            { text: "Cut through the cobwebs (Left).", nextId: 4 },
            { text: "Follow the fresh air (Right).", nextId: 5 },
        ],
    },
    {
        id: 3,
        text: "You decide adventure isn't for you today. You go home to enjoy the afternoon sun.",
        choices: [],
    },
    {
        id: 4,
        text: "You walk into a giant spider web! The spider descends... You are stuck.",
        choices: [],
    },
    {
        id: 5,
        text: "You find a hidden exit that opens up onto a cliffside during the blue hour. It's beautiful. You win!",
        choices: [],
    },
];
// INITIALIZATION
// Wait for the window to load before running, just to be safe
window.onload = () => {
    const game = new AdventureGame(storyData);
};
export {};
//# sourceMappingURL=index.js.map