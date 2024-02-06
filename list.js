files = ["computer"]
list = document.getElementById("list")
for (file in files) {
  list.innerHTML += "\n<a href=\""+file+"\">"+file+"</a>"
}
