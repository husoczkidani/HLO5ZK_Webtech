$(document).ready(function(){

  //Brand validation
  $('#brandCheck').hide();
  let brandError = false;
  $('#brand').keyup(function(){
    validateBrand();
  });

  function validateBrand(){
    let brandVal = $('#brand').val();
    if(brandVal.length == ''){
      $('#brandCheck').show();
      brandError = false;
    }
    else {
      $('#brandCheck').hide();
      brandError = true;
    }
  };

  //Type validation
  $('#typeCheck').hide();
  let typeError = false;
  $('#type').keyup(function(){
    validateType();
  });

  function validateType(){
    let typeVal = $('#type').val();
    if(typeVal.length == ''){
      $('#typeCheck').show();
      typeError = false;
    }
    else {
      $('#typeCheck').hide();
      typeError = true;
    }
  };

  //Fuel validation
  $('#fuelCheck').hide();
  let fuelError = false;
  $('#fuel').click(function(){
    validateFuel();
  });

  function validateFuel(){
    let fuelVal = $('#fuel').val();
    if(fuelVal.length == ''){
      $('#fuelCheck').show();
      fuelError = false;
    }
    else {
      $('#fuelCheck').hide();
      fuelError = true;
    }
  };

  //Year validation
  $('#yearCheck').hide();
  let yearError = false;
  $('#year').keyup(function(){
    validateYear();
  });

  let date = new Date();
  function validateYear(){
    let yearVal = $('#year').val();
    if(yearVal.length == ''){
      $('#yearCheck').html("**Year is missing");
      $('#yearCheck').show();
      yearError = false;
    }
    else if(yearVal < 1900 || yearVal > date.getFullYear()){
      $('#yearCheck').show();
          $('#yearCheck').html("**Year must be between 1900 and the current year");
          yearError = false;
    }
    else {
      $('#yearCheck').hide();
      yearError = true;
    }
  };

  //Performance validation
  $('#performanceCheck').hide();
  let performanceError = false;
  $('#performanceTextKW').keyup(function(){
    validatePerformance();
  });
  $('#performanceTextHP').keyup(function(){
    validatePerformance();
  });
  $("#performanceSlider").on('input', function(){
    validatePerformance();
  });

  function validatePerformance(){
    let performanceVal = $('#performanceTextKW').val();
    if(performanceVal == 0){
      $('#performanceCheck').show();
      performanceError = false;
    }
    else {
      $('#performanceCheck').hide();
      performanceError = true;
    }
  };

  //Adding row to the table
  $("#formBtn").click(function(){

    var isGood = brandError &&
                 typeError &&
                 fuelError &&
                 yearError &&
                 performanceError;
    
    if(isGood){
      insertTable()
      brandError = false;
      typeError = false;
      fuelError = false;
      yearError = false;
      performanceError = false;
    }else{
      if(!brandError){
        $('#brandCheck').show();
      }
      if(!typeError){
        $('#typeCheck').show();
      }
      if(!fuelError){
        $('#fuelCheck').show();
      }
      if(!yearError){
        $('#yearCheck').show();
      }
      if(!performanceError){
        $('#performanceCheck').show();
      }
    }
  })

})

function insertTable(){
  var table = document.getElementById("section2Table");
  var row = table.insertRow(0);
  var brandRow = row.insertCell(0);
  var typeRow = row.insertCell(1);
  var fuelRow = row.insertCell(2);
  var yearRow = row.insertCell(3);
  var performanceRow = row.insertCell(4);
  brandRow.innerHTML = $("#brand").val();
  typeRow.innerHTML = $("#type").val();
  fuelRow.innerHTML = $("#fuel").val();
  yearRow.innerHTML = $("#year").val();
  performanceRow.innerHTML = ($("#performanceTextKW").val() + "Kw, "+ $("#performanceTextHP").val()+ "Hp");
  clearForm();
}



function clearForm(){
    $("#brand").val("");
    $("#type").val("");
    $("#fuel").val("");
    $("#year").val("");
    $("#performanceTextKW").val(0);
    $("#performanceTextHP").val(0);
    $("#performanceSlider").val(0);
}
