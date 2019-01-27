function updateTimeBar(timeBar) {
    old_width = timeBar.width;
    old_time = timeBar.time;
    timeBar.width = old_width * (old_time-1) / old_time;
    timeBar.time--;
    return timeBar;
}