"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, timerId) {

        if (!timerId) {
            throw new Error('error text');
        }

        if (this.alarmCollection.some((alarm) => { return alarm.timerId == timerId })) {
            console.error('error text 2');
            return;
        }


        this.alarmCollection.push({
            time,
            callback,
            timerId
        });
    }

    removeClock(timerId) {
        let ind = (this.alarmCollection.findIndex(i => i.timerId === timerId));
        if (ind != -1) {
            this.alarmCollection.splice(ind, 1);
            return true;
        } else
            return false;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        function checkClock(alarm) {
            if (this.getCurrentFormattedTime() === alarm.time) {
                alarm.callback();
            }
        }

        if (!this.timerId) {
            this.timerId = setInterval(this.alarmCollection.forEach(checkClock.bind(this)), 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarm) => {
            console.log(`${alarm.timerId};${alarm.time}`)
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}