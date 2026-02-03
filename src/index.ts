interface Choice {
    text: string;
    nextSceneId: number;
}

interface Scene {
    id: number;
    text: string;
    choices: Choice[];
    visualColor?: string;
}

class AdventureGame {
    private textElement: HTMLElement;
    private choicesElement: HTMLElement;
    private visualElement: HTMLElement;
    private scenes: Scene[];

    constructor(scenes: Scene[]) {
        this.scenes = scenes;
        
        this.textElement = document.getElementById('story-text')!;
        this.choicesElement = document.getElementById('choices-container')!;
        this.visualElement = document.getElementById('scene-image')!;
        if (!this.textElement || !this.choicesElement || !this.visualElement) {
            console.error("Required HTML elements not found!");
            return;
        }
        this.showScene(1);
    }

    private showScene(sceneId: number): void {
    }
}

const mainStory: Scene[] = [
];

const game = new AdventureGame(mainStory);