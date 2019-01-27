function updateTimeBar(timeBar) {
    timeBar.width = timeBar.width*timeBar.time / (timeBar.time-1);
    timeBar.time--;
}