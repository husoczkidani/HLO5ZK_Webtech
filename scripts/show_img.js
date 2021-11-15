$(document).ready($("#kei").fadeOut())

$('#show_kei').hover(function() {
    $("#kei").fadeIn();
}, function() {
    $("#kei").fadeOut();
});