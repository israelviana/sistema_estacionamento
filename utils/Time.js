class Time{

    constructor() {}

    timeNowWithHoursMinutesSeconds(){
        const timeNow = new Date()
        return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds()
    }
}

module.exports = Time