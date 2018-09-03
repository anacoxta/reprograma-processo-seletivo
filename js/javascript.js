function newItem() {
  var item = document.getElementById("entrada").value;
  var ul = document.getElementById("lista");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  document.getElementById("entrada").value = "";
  lista.insertBefore(li, lista.childNodes[0]);
  li.onclick = function() {
    this.classList.toggle('feito');
    }
}

document.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newItem();
    }
};