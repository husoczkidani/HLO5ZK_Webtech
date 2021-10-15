$(document).ready(function(){
    $("#performanceSlider").on('input', function(){
        var KW = $(this).val();
        var HP = ($(this).val() * 1.34).toFixed(0);
        $('#performanceTextKW').val(KW);
        $('#performanceTextHP').val(HP);
    });
    $("#performanceTextKW").on('input', function(){
        var KW = $(this).val();
        var HP = ($(this).val() * 1.34).toFixed(0);
        $('#performanceTextHP').val(HP);
        $('#performanceSlider').val(KW)
    })
    $("#performanceTextHP").on('input', function(){
        var HP = $(this).val();
        var KW = ($(this).val() / 1.34).toFixed(0);
        $('#performanceTextKW').val(KW);
        $('#performanceSlider').val(KW)
    }) 
  })