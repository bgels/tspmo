class AdventureGame {
    textElement;
    choicesElement;
    visualElement;
    scenes;
    constructor(scenes) {
        this.scenes = scenes;
        this.textElement = document.getElementById('story-text');
        this.choicesElement = document.getElementById('choices-container');
        this.visualElement = document.getElementById('scene-image');
        if (!this.textElement || !this.choicesElement || !this.visualElement) {
            console.error("Required HTML elements not found!");
            return;
        }
        this.showScene(1);
    }
    showScene(sceneId) {
        const scene = this.scenes.find(s => s.id === sceneId);
        if (!scene) {
            console.error("Scene not found!");
            return;
        }
        this.textElement.innerText = scene.text;
        if (scene.visualColor) {
            this.visualElement.style.backgroundColor = scene.visualColor;
        }
        this.choicesElement.innerHTML = '';
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.className = 'py-3 px-6 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all text-left font-semibold border border-indigo-400/30';
            button.onclick = () => this.showScene(choice.nextSceneId);
            this.choicesElement.appendChild(button);
        });
    }
}
const myStory = [
    {
        id: 1,
        text: "You stand at the edge of the Whispering Woods. The wind rustles gently. Two distinct paths lie before you.",
        visualColor: "#22c55e",
        choices: [
            { text: "Take the sunlit path to the left", nextSceneId: 2 },
            { text: "Take the overgrown, shadowy path to the right", nextSceneId: 3 }
        ]
    },
    {
        id: 2,
        text: "The path is warm and lined with wildflowers. You hear the sound of rushing water nearby.",
        visualColor: "#fbbf24",
        choices: [
            { text: "Follow the sound of the water", nextSceneId: 4 },
            { text: "Go back to the entrance", nextSceneId: 1 }
        ]
    },
    {
        id: 3,
        text: "The air grows cold. Ancient roots twist across the ground like snakes. You see a faint blue glow ahead.",
        visualColor: "#312e81",
        choices: [
            { text: "Investigate the glow", nextSceneId: 5 },
            { text: "Run back to the entrance", nextSceneId: 1 }
        ]
    },
    {
        id: 4,
        text: "You arrive at a crystal clear stream. A small wooden boat is tied to the shore.",
        visualColor: "#0ea5e9",
        choices: [
            { text: "Get in the boat", nextSceneId: 1 },
            { text: "Rest by the shore", nextSceneId: 2 }
        ]
    },
    {
        id: 5,
        text: "You find an ancient stone circle glowing with magic. A strange hum fills your ears.",
        visualColor: "#7c3aed",
        choices: [
            { text: "Touch the stone", nextSceneId: 1 },
            { text: "Leave immediately", nextSceneId: 3 }
        ]
    }
];
const game = new AdventureGame(myStory);
export {};
//# sourceMappingURL=index.js.map