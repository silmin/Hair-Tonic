function growEffect(gameScene) {
    let core = Core.instance;
    let effectScale = 0.01 * (Math.floor(Math.random()*20) + 20);
    let effect = new Sprite(100, 100);
    effect.scale(effectScale);
    effect.x = HEAD_X + Math.floor(Math.random()*HEAD_WIDTH) - effect.x*100;
    effect.y = GAME_SIZE_HEIGHT/2 + Math.floor(Math.random()*GAME_SIZE_HEIGHT/2);
    effect.speed = Math.floor(Math.random() * 10) + 5;
    effect.image = core.assets['./img/effect.png'];

    effect.addEventListener('enterframe', function() {
        effect.y -= effect.speed;
        if (effect.speed > 0) {
            effect.speed--;
            effect.opacity -= 0.05;
        } else {
            effect.visible = false;
        }
    });
    gameScene.addChild(effect);
}