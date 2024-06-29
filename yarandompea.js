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
//let randomDay = Math.floor(Math.random() * (maxDay - minDay) + minDay);

function randomMonth1() {
    randomMonth = Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
    //console.log(randomDay);
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
// return mm;
//let randomMonth = Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);

function randomYear1() {
    randomYear = Math.floor(Math.random() * (maxYear - minYear) + minYear);
    console.log(randomMonth);
    if ((((randomYear % 4 !== 0 && randomYear % 100 === 0) || (randomYear % 4 !== 0 && randomYear % 100 !== 0 && randomYear % 400 !== 0)) && randomDay > 28)) {
        //randomYear = 2021;
        //randomYear1();
        return randomYear1();
    }

    /*if (((randomYear % 4 === 0 && randomYear % 100 !== 0) || (randomYear % 4 === 0 && randomYear % 100 === 0 && randomYear % 400 === 0)) && (randomDay > 29)) {
        return randomYear1();
    }*/
    else {
        return randomYear;
    }

}

module.exports = {randomDay1,randomMonth1,randomYear1};
/*function verifyDate(randomDay, randomMonth, randomYear) {
    if (!(randomYear % 4 === 0 && randomYear % 100 !== 0) || !(randomYear % 4 === 0 && randomYear % 100 === 0 && randomYear % 400 === 0) && (randomDay === 29)) {
        return randomDay1(1, 30);
    }
    if (randomDay === 31 && (randomMonth === 2 || randomMonth === 4 || randomMonth === 6 || randomMonth === 9 || randomMonth === 11)) {
        return randomDay1(1, 30);
    }
    else {
        return verifyDate;
    }
}*/
//let randomYear = Math.floor(Math.random() * (maxYear - minYear) + minYear);

/*if (mm === 5) {
    randomMonth1(1,randomMonth1());
}*/
//console.log(randomDay, randomMonth, randomYear);
//if (randomDay === 30) { console.log("!"); }
console.log(randomDay1(), randomMonth1(), randomYear1());
//console.log(verifyDate(randomDay1(), randomMonth1(), randomYear1()));