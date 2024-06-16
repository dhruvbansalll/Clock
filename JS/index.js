let hourHand = document.querySelector('.hourHand');
let minuteHand = document.querySelector('.minuteHand');
let secondHand = document.querySelector('.secondHand');

setInterval(() => {
    let d = new Date();
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds();

    hrotation = 30*htime+mtime/2+stime/120;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);   