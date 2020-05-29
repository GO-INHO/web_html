function getHtml(template) {
  return template.join('\n');
}

function onClickToImage() {
  var myImage = document.getElementById('myImage');
  myImage.src = canvas.toDataURL();
}