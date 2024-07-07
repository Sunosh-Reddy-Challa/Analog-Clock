setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    Hour_rotation = 30*htime + mtime/2;
    Minute_rotation = 6*mtime;
    Seconds_rotation = 6*stime;

    hour.style.transform = `rotate(${Hour_rotation}deg)`;
    minute.style.transform = `rotate(${Minute_rotation}deg)`;
    seconds.style.transform = `rotate(${Seconds_rotation}deg)`;

}, 1000);