function updateCountdown() {
  var now = new Date();
  var target = new Date(now);
  target.setHours(22, 0, 0, 0);

  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }

  var timeLeft = target - now;
  var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  var minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  var secondsLeft = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("day").innerHTML = daysLeft.toString().padStart(2, "0");
  document.getElementById("hour").innerHTML = hoursLeft.toString().padStart(2, "0");
  document.getElementById("minute").innerHTML = minutesLeft.toString().padStart(2, "0");
  document.getElementById("second").innerHTML = secondsLeft.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
