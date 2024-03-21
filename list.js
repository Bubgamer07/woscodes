files = ["computer","buggyuncensor","resourcemonitorcode"]
list = document.getElementById("list")
for (file of files) {
  list.innerHTML += "<br><a href=\""+file+"\">"+file+"</a>"
}

