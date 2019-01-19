function growHair(gameScene) {
    let core = Core.instance;
    let hairSprite = new Sprite(HAIR_WIDTH, HAIR_HEIGHT);
    let x, y;
    do {
        x = Math.floor(Math.random() * GROW_AREA_WIDTH);
        y = Math.floor(Math.random() * GROW_AREA_HEIGHT);
    } while(y < -1*x+150 || y < x-360); //1次関数で左と右上を除外
    hairSprite.x = GROW_AREA_X + x - HAIR_WIDTH / 2;
    hairSprite.y = GROW_AREA_Y + y - HAIR_HEIGHT / 2;
    hairSprite.debugColor = '#77ff77';
    hairSprite.image = core.assets['./img/hair.png'];

    gameScene.addChild(hairSprite);
}