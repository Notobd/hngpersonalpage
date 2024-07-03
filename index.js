setInterval(function () {
  var currentTime = new Date();
  var utcTime = currentTime.toUTCString().replace("GMT", "");
  document.getElementById("utc-time").innerHTML = utcTime;
}, 1000);
