function validate(input) {
    var value = input.value;
    var clean = value.replace(/\d/g, '');
    input.value = clean;
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("openBtn");
var span = document.getElementById("closeBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}