"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, timerId) {
        let now = new Date();
        let HH = now.getHours();
        let MM = now.getMinutes();
        time = `${HH}:${MM}`;

        if (!timerId) {
            throw new Error('error text');
        }

        if (this.alarmCollection.some(function(alarm) { return alarm.timerId == timerId })) {
            console.error('error text 2');
            return;
        }

        let alarm = {
            time,
            callback,
            timerId
        }

        this.alarmCollection.push(alarm);
    }

    removeClock(timerId) {
        if (this.alarmCollection.filter(i => i.timerId === timerId)) {
            this.alarmCollection.splice(this.alarmCollection.indexOf(timerId), 1);
            return true;
        } else
            return false;

    }

    getCurrentFormattedTime(time) {
        let now = new Date();
        let HH = now.getHours();
        let MM = now.getMinutes();
        if (MM < 10) {
            MM = "0" + MM;
        }
        time = `${HH}:${MM}`;
        return time;
    }

    start() {
        function checkClock(alarm) {
            if (new Date() === alarm.time) {
                return callback;
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(checkClock, 1000);
        }

    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(function(alarm) {
            console.log(`${alarm.timerId};${alarm.time}`)
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}