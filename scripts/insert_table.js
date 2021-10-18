function insertNewLine() {
    var table = document.getElementById("section2Table");
    var row = table.insertRow(0);
    var brand = row.insertCell(0);
    var type = row.insertCell(1);
    var fuel = row.insertCell(2);
    var year = row.insertCell(3);
    var performance = row.insertCell(4);
    brand.innerHTML = $("#brand").val();
    type.innerHTML = $("#type").val();
    fuel.innerHTML = $("#fuel").val();
    year.innerHTML = $("#year").val();
    performance.innerHTML = ($("#performanceTextKW").val() + "Kw, "+ $("#performanceTextHP").val()+ "Hp");
    
}

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()