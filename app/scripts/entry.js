const secondHand = document.querySelector('.sec');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`

  const minutes = now.getMinutes();
  const minutesDeg = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = now.getHours();
  const hourDeg = ((hours / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval( setDate, 1000 );
setDate();
