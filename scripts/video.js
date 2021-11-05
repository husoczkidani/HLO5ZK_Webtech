var video = document.getElementById("video");
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

var rally_video = document.getElementById("rally_video");
var drift_video = document.getElementById("drift_video");


$(document).ready(function(){
    $('#rally_div').hover(function() {
        $(this).addClass('transition');
        $("#rally_img").fadeOut();
        rally_video.play();
    }, function() {
        $(this).removeClass('transition');
        $("#rally_img").fadeIn();
        rally_video.pause();

    });

    $('#drift_div').hover(function() {
      $(this).addClass('transition');
      $("#drift_img").fadeOut();
      drift_video.play();
  }, function() {
      $(this).removeClass('transition');
      $("#drift_img").fadeIn();
      drift_video.pause();
  });
});