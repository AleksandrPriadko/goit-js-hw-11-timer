
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
        };
    }

    timerStart() {
        setInterval(() => {
            // const dateStart = this.targetDate;
            const curentDate = Date.now();
            const countdownDate = this.targetDate - curentDate;
            this.dataUpdate(countdownDate);
        }, 1000);
    }

    dataUpdate(time) {
        const days = this.pud(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pud(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pud(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pud(Math.floor((time % (1000 * 60)) / 1000));
        this.timerAdd(days, hours, mins, secs);
    }

    timerAdd(days, hours, mins, secs) {
        this.refs.days.textContent = days
        this.refs.hours.textContent = hours
        this.refs.mins.textContent = mins
        this.refs.secs.textContent = secs

    }

    pud(value) {
        return String(value).padStart(2, "0");
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('February 14, 2021'),
});
timer.timerStart();
