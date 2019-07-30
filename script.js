function chuyenDoi() {
    let amount = document.getElementById("sotien").value;
    let from = document.getElementById("input").value;
    let to = document.getElementById("output").value;
    let result = amount * to / from;
    document.getElementById("result").innerHTML = result;
}
