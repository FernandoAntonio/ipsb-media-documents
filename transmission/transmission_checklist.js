function uncheckAll(elementName) {
  print(elementName);
  var name = document.getElementsByName(elementName);
  for (i = 0; i < name.length; i++) {
    print(name[i]);
    name[i].disabled = true;
  }
}