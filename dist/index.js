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
    }
}
const mainStory = [];
const game = new AdventureGame(mainStory);
export {};
//# sourceMappingURL=index.js.map