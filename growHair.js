function growHair(gameScene) {
    let hairSprite = new Sprite(HAIR_WIDTH, HAIR_HEIGHT);
    hairSprite.x = GROW_AREA_X + Math.floor(Math.random() * GROW_AREA_WIDTH) - HAIR_WIDTH / 2;
    hairSprite.y = GROW_AREA_Y + Math.floor(Math.random() * GROW_AREA_HEIGHT) - HAIR_HEIGHT;
    hairSprite.debugColor = '#77ff77';

    gameScene.addChild(hairSprite);
}