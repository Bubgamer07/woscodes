files = ["computer","buggyuncensor"]
list = document.getElementById("list")
for (file of files) {
  list.innerHTML += "\n<a href=\""+file+"\">"+file+"</a>"
}
