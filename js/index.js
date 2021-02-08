const refs = {
    date: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

function timerStart() {
    const dateStart = Date.now();
    const targetDate = 604800000;
    const countdown = dateStart + targetDate;
    setInterval(() => {
        const curentDate = Date.now();
        const countdownDate = countdown - curentDate;
        dataUpdate(countdownDate);
    }, 1000);
    return
}
timerStart(dataUpdate);

function dataUpdate(time) {
    const days = pud(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pud(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pud(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pud(Math.floor((time % (1000 * 60)) / 1000));
    refs.date.textContent = `${days}`
    refs.hours.textContent = `${hours}`
    refs.mins.textContent = `${mins}`
    refs.secs.textContent = `${secs}`
};
function pud(value) {
    return String(value).padStart(2, "0");
};