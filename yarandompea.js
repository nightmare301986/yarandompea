let minDay = 27;
let maxDay = 32;
let minMonth = 1;
let maxMonth = 3;
let currentTime = new Date();
let year = currentTime.getFullYear();
let minYear = 0;
let maxYear = currentTime.getFullYear() + 1;
let mm = 0;

function randomDay1() {
    randomDay = Math.floor(Math.random() * (maxDay - minDay) + minDay);
    return randomDay;
}

function randomMonth1() {
    randomMonth = Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
    if ((randomMonth === 2 || randomMonth === 4 || randomMonth === 6 || randomMonth === 9 || randomMonth === 11)&& randomDay === 31) {
        return randomMonth1();
    }
    if (randomMonth === 2 &&  randomDay > 29) {
        return randomMonth1();
        }
     else {
        return randomMonth;
    }
}

function randomYear1() {
    randomYear = Math.floor(Math.random() * (maxYear - minYear) + minYear);
    if ((((randomYear % 4 !== 0 && randomYear % 100 === 0) || (randomYear % 4 !== 0 && randomYear % 100 !== 0 && randomYear % 400 !== 0)) && randomDay > 28)) {
       return randomYear1();
    }
    else {
        return randomYear;
    }

}
module.exports = {randomDay1,randomMonth1,randomYear1};
