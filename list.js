files = ["computer","buggyuncensor","resourcemonitorcode.lua"]
list = document.getElementById("list")
for (file of files) {
  list.innerHTML += "<br><a href=\""+file+"\">"+file+"</a>"
}

