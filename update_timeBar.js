function updateTimeBar(timeBar) {
    let old_width = timeBar.width;
    let old_time = timeBar.time;
    timeBar.width = old_width * (old_time-1) / old_time;
    timeBar.time--;
    return timeBar;
}