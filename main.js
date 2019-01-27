enchant();

window.onload = function() {
    var core = new Core(GAME_SIZE_WIDTH, GAME_SIZE_HEIGHT);
    core.fps = FPS;

    loadAssets();

    core.onload = function() {
        transitionTopScene();
    }
    core.debug();
}