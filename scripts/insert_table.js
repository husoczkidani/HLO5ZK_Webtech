$("#formBtn").click(function(){
  var brand = $("#brand").val();
  var type = $("#type").val();
  var fuel = $("#fuel").val();
  var year = $("#year").val();
  var performanceKW = $("#performanceTextKW").val();
  var performanceHP = $("#performanceTextHP").val();
  var performanceSlider = $("#performanceSlider").val();
  var isNull = brand === "" 
            || type === "" 
            || fuel === "" 
            || year === "" 
            || performanceKW === "" 
            || performanceHP === ""
            || performanceSlider === "";
  if(!isNull){
    var table = document.getElementById("section2Table");
    var row = table.insertRow(0);
    var brandRow = row.insertCell(0);
    var typeRow = row.insertCell(1);
    var fuelRow = row.insertCell(2);
    var yearRow = row.insertCell(3);
    var performanceRow = row.insertCell(4);
    brandRow.innerHTML = brand
    typeRow.innerHTML = type
    fuelRow.innerHTML = fuel
    yearRow.innerHTML = year
    performanceRow.innerHTML = (performanceKW + "Kw, "+ performanceHP+ "Hp");
    clearForm();
  }else{
    $("#brandLabel").css("color:red;")
    alert("Fill everything!");
  }
})
function clearForm(){
    $("#brand").val("");
    $("#type").val("");
    $("#fuel").val("");
    $("#year").val("");
    $("#performanceTextKW").val(0);
    $("#performanceTextHP").val(0);
    $("#performanceSlider").val(0);
}