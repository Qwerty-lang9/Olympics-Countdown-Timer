

const d = document.getElementById("days");
const H = document.getElementById("hours");
const M = document.getElementById("minutes");
const S = document.getElementById("seconds");

const olympics = new Date("July 14, 2028");

function updateCountdown() {
    const today = new Date();
    const remainingTime = olympics - today;
    if (remainingTime <= 0) {
        d.textContent = "00";
        H.textContent = "00";
        M.textContent = "00";
        S.textContent = "00";
        return;
    }

    const totalDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    const totalHours = Math.floor(remainingTime / (1000 * 60 * 60));
    const remainingHours = totalHours % 24;

    const totalMinutes = Math.floor(remainingTime / (1000 * 60));
    const remainingMinutes = totalMinutes % 60;

    const totalSeconds = Math.floor(remainingTime / 1000);
    const remainingSeconds = totalSeconds % 60;

    d.textContent = totalDays;
    H.textContent = String(remainingHours).padStart(2, "0");
    M.textContent = String(remainingMinutes).padStart(2, "0");
    S.textContent = String(remainingSeconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
    

