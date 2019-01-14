function makeTopScene() {
    let topScene = new Scene();
    topScene.backgroundColor = '#3f3f3f';

    let titleSprite = new Sprite(TITLE_WIDTH, TITLE_HEIGHT);
    titleSprite.x = TITLE_X;
    titleSprite.y = TITLE_Y;

    topScene.addChild(titleSprite);
    topScene.addEventListener('touchstart', function () {
        console.log('to DESCRIPTION');
        transitionDescriptionScene();
    });
    
    return topScene;
}

function makeDescriptinScene() {
    let descriptionScene = new Scene();
    let descriptionSprite = new Sprite(GAME_SIZE_WIDTH, GAME_SIZE_HEIGHT);
    descriptionSprite.x = 0;
    descriptionSprite.y = 0;

    descriptionScene.addChild(descriptionSprite);
    descriptionScene.addEventListener('touchstart', function() {
        console.log('to GAME');
        transitionGameScene();
    });

    return descriptionScene;
}