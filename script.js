const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const hourHand=document.getElementById("hour");
const minuteHand=document.getElementById("minute");
const secondHand=document.getElementById("second");
const timewhole=document.getElementById("time");
const dateWhole=document.getElementById("date-whole");
const theme =document.getElementById("theme");
const bg =document.getElementById("bg-color");
const root =document.documentElement;
theme.addEventListener("click",()=>{
    if(theme.textContent=="Dark Mode"){
        root.classList.toggle("dark");
        theme.innerText="Light Mode";
        bg.style.clipPath="circle(150% at 50% 8%)";
    }else{
        root.classList.toggle("dark");
        theme.innerText="Dark Mode";
        bg.style.clipPath="circle(0% at 50% 8%)";
    }
});
function time() {
    let dateObj=new Date();
    let hr=dateObj.getHours();
    let min=dateObj.getMinutes();
    let sec=dateObj.getSeconds();
    let day=days[dateObj.getDay()];
    let month=months[dateObj.getMonth()];
    let date=dateObj.getDate();
    let AmPm= hr>=12?"PM":"AM";
    hourHand.style.transform = `translate(-50%, -100%) rotate(${scale(hr%12, 0, 11, 0, 360)}deg)`
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 59, 0, 360)}deg)`
    secondHand.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 59, 0, 360)}deg)`

    timewhole.innerHTML = `${hr%12}:${min < 10 ? `0${min}` : min} ${AmPm}`
    dateWhole.innerHTML = `${day}, ${month} <span id="date-value">${date}</span>`
    
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setInterval(time, 1000);
