enchant();

window.onload = function() {
    var core = new Core(GAME_SIZE_X, GAME_SIZE_Y);
    core.fps = FPS;

    core.onload = function() {
        
        let sceneArray = new Array();
        for (let i = 0;i < SCENE; i++) {
            sceneArray[i] = new Scene();
            sceneArray[i].backgroundColor = '#3f3f3f';
        }

        core.pushScene(sceneArray[TOP]);
        
        sceneArray[TOP].addEventListener('touchstart', function() {
            console.log('to DESCRIPTION');
            core.replaceScene(sceneArray[DESCRIPTION]);
        });
        
        sceneArray[DESCRIPTION].addEventListener('touchstart', function() {
            console.log('to GAME');
            core.replaceScene(sceneArray[GAME]);
        });

        sceneArray[GAME].addEventListener('touchstart', function() {
            console.log('to RESULT');
            core.replaceScene(sceneArray[RESULT]);
        });

        sceneArray[RESULT].addEventListener('touchstart', function() {
            console.log('to TOP');
            core.replaceScene(sceneArray[TOP]);
        });
    }
    core.debug();
}