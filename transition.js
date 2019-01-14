function transitionTopScene() {
    let core = Core.instance;
    let topScene = makeTopScene();
    core.replaceScene(topScene);
}

function transitionDescriptionScene() {
    let core = Core.instance;
    let descriptionScene = makeDescriptionScene();
    core.replaceScene(descriptionScene);
}

function transitionGameScene() {
    let core = Core.instance;
    let gameScene = makeGameScene();
    core.replaceScene(gameScene);
}

function transitionResultScene() {
    let core = Core.instance;
    let resultScene = makeResultScene();
    core.replaceScene(resultScene);
}