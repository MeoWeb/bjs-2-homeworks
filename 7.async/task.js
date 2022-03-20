"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, timerId) {
        if (!timerId) {
            throw new Error("error text");
        }

        if (
            this.alarmCollection.some((alarm) => {
                return alarm.timerId == timerId;
            })
        ) {
            console.error("error text 2");
            return;
        }

        this.alarmCollection.push({
            time,
            callback,
            timerId,
        });
    }

    removeClock(timerId) {
        let ind = this.alarmCollection.findIndex((i) => i.timerId === timerId);
        if (ind != -1) {
            this.alarmCollection.splice(ind, 1);
            return true;
        } else return false;
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
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(checkClock.bind(this));
            }, 1000);
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
            console.log(`${alarm.timerId}) ${alarm.time}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

//2

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("9:00", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("9:01", () => {
    console.log("Давай вставай уже!");
    phoneAlarm.removeClock(2)
}, 2);
//phoneAlarm.addClock("9:01", () => console.log("Иди умываться"));
phoneAlarm.addClock("9:02", () => {
    console.log("Вставай, а то проспишь");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);

phoneAlarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();