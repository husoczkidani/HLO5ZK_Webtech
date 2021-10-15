function insertNewLine() {
    var table = document.getElementById("section2Table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = $("#text").val();
    cell2.innerHTML = $("#text").val();
    cell3.innerHTML = $("#text").val();
}