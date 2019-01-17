function growHair(gameScene) {
    let core = Core.instance;
    let hairSprite = new Sprite(HAIR_WIDTH, HAIR_HEIGHT);
    let x, y;
    do {
        x = Math.floor(Math.random() * GROW_AREA_WIDTH);
        y = Math.floor(Math.random() * GROW_AREA_HEIGHT);
    } while(y < -1*x+120 || y < x-380);
    hairSprite.x = GROW_AREA_X + x - HAIR_WIDTH / 2;
    hairSprite.y = GROW_AREA_Y + y - HAIR_HEIGHT;
    hairSprite.debugColor = '#77ff77';
    hairSprite.image = core.assets['./img/hair.png'];

    gameScene.addChild(hairSprite);
}