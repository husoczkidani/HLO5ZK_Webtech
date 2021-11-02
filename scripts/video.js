var video = document.getElementById("video");
var btn = document.getElementById("videoBtn");
var control = document.getElementById("videoController");

$('#videoController').on('click',function videoController() {
  if (video.paused) {
    video.play();
    control.classList.add("fa-pause")
    control.classList.remove("fa-play")
  } else {
    video.pause();
    control.classList.remove("fa-pause")
    control.classList.add("fa-play")
  }
});