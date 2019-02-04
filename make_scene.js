function makeTopScene() {
    let topScene = new Scene();
    let core = Core.instance;

    let titleSprite = new Sprite(TITLE_WIDTH, TITLE_HEIGHT);
    titleSprite.x = TITLE_X;
    titleSprite.y = TITLE_Y;
    titleSprite.image = core.assets['./img/title.png'];
    topScene.addChild(titleSprite);

    let opacity_step = 0.1;
    let plzClickLabel = new Label();
    plzClickLabel.width = PLZ_CLICK_LABEL_WIDTH;
    plzClickLabel.x = PLZ_CLICK_LABEL_X;
    plzClickLabel.y = PLZ_CLICK_LABEL_Y;
    plzClickLabel.font = "20px sans-serif"
    plzClickLabel.text = "click to start";
    plzClickLabel.textAlign = "center";
    plzClickLabel.addEventListener('enterframe', function(){
        this.opacity -= 0.025;
        if (this.opacity <= 0) this.opacity = 1;
    });
    topScene.addChild(plzClickLabel);


    topScene.addEventListener('touchstart', function () {
        transitionGameScene();
    });
    
    return topScene;
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
    cntHearLabel.font = "25px sans-serif";
    gameScene.addChild(cntHearLabel);

    let timeBar = new Sprite(GAME_SIZE_WIDTH, TIME_BAR_HEIGHT);
    timeBar.time = GAME_TIME;
    timeBar.x = 0;
    timeBar.y = 0;
    timeBar.backgroundColor = "#00ff00";
    gameScene.addChild(timeBar);

    let frameCnt = 0;

    gameScene.addEventListener('touchstart', function() {
        growHair(this);
        for (let i = 0; i < 5; ++i) growEffect(this);
        cntHearLabel = updateCntHear(cntHearLabel);
    });
    gameScene.addEventListener('enterframe', function() {
        frameCnt++;
        if(isFrame(frameCnt)) {
            frameCnt = 0;
            timeBar = updateTimeBar(timeBar);
            if(timeBar.time === 0) {
                transitionResultScene(cntHearLabel.value);
            }
        }
    });
    return gameScene;
}

function makeResultScene(grewCnt) {
    let resultScene = new Scene();

    let resultTitleLabel = new Label();
    resultTitleLabel.width = RESULT_TITLE_LABEL_WIDTH;
    resultTitleLabel.x = RESULT_TITLE_LABEL_X;
    resultTitleLabel.y = RESULT_TITLE_LABEL_Y;
    resultTitleLabel.text = "result";
    resultTitleLabel.font = "30px sans-serif";
    resultTitleLabel.textAlign = "center";
    resultScene.addChild(resultTitleLabel);

    let grewCntLabel = new Label();
    grewCntLabel.x = RESULT_SCORE_LABEL_X;
    grewCntLabel.y = RESULT_SCORE_LABEL_Y;
    grewCntLabel.width = RESULT_SCORE_LABEL_WIDTH;
    grewCntLabel.value = grewCnt;
    grewCntLabel.text = "Grown Hair : " + String(grewCntLabel.value);
    grewCntLabel.font = "40px sans-serif";
    grewCntLabel.textAlign = "center";
    resultScene.addChild(grewCntLabel);

    let restartButton = new Button("Play again", "light");
    restartButton.width = AGAIN_BUTTON_WIDTH;
    restartButton.height = AGAIN_BUTTON_HEIGHT;
    restartButton.x = AGAIN_BUTTON_X;
    restartButton.y = AGAIN_BUTTON_Y;
    restartButton.addEventListener('touchend', function() {
        transitionTopScene();
    });
    resultScene.addChild(restartButton);

    return resultScene;
}