let hours = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let randomampm = "AM";
    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hours.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = randomampm;
    setTimeout(()=>updateClock(), 1000);
}
updateClock();