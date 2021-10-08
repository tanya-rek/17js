document.getElementById('showDate').onclick = function () {
    
    alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

    alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

    alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

    alert( formatDate(new Date(new Date - 86400* 4 * 1000)) ); // вчерашняя дата вроде 31.12.2016, 20:00
}

function formatDate(date) {
    let currentDate = new Date();
    let differenceInMs = currentDate - date;

    if (differenceInMs < 1000) {
        return "right now";
    } else if (differenceInMs > 1000 && differenceInMs < 60000) {
        return `${differenceInMs/1000} seconds ago`;
    } else if (differenceInMs > 60000 && differenceInMs < 3600000) {
        return `${differenceInMs/60000} minutes ago`;
    } else {
        let dateOld = changeDate(date.getDate());
        let monthOld = changeDate(date.getMonth() + 1);
        let yearOld = String(date.getFullYear()).slice(2, 4);
        let hoursOld = changeDate(date.getHours());
        let minutesOld = changeDate(date.getMinutes());

        let changeDate = (numberToCheck) => {
            return (numberToCheck < 10) ? "0" + numberToCheck : numberToCheck;
        }

        return `${dateOld}.${monthOld}.${yearOld} ${hoursOld}:${minutesOld}`;
    }

}

