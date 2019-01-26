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

function makeDescriptionScene() {
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

function makeGameScene() {
    let gameScene = new Scene();
    let core = Core.instance;

    let headSprite = new Sprite(HEAD_WIDTH, HEAD_HEIGHT);
    headSprite.x = HEAD_X;
    headSprite.y = HEAD_Y;
    headSprite.image = core.assets['./img/head.png'];
    gameScene.addChild(headSprite);
   
    let growAreaSprite = new Sprite(GROW_AREA_WIDTH, GROW_AREA_HEIGHT);
    growAreaSprite.x = GROW_AREA_X;
    growAreaSprite.y = GROW_AREA_Y;
    growAreaSprite.debugColor = '#7777ff';
    gameScene.addChild(growAreaSprite);

    let cntHearLabel = new Label();
    cntHearLabel.value = 0;
    cntHearLabel.text = "Hear Count : " + String(cntHearLabel.value);
    cntHearLabel.x = 10;
    cntHearLabel.y = 20;
    gameScene.addChild(cntHearLabel);

    gameScene.addEventListener('enterframe', function() {
        if (core.fps % 2 === 0) {
            growHair(this);
            for (let i = 0; i < 5; ++i) growEffect(this);
            cntHearLabel = updateCntHear(cntHearLabel);
        }
    });
    return gameScene;
}