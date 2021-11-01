$(document).ready(function(){
    $("#textFilterInput").on("input", function() {
      var value = $(this).val().toLowerCase();
      $("#section2Table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });