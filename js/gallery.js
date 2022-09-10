function upDate(previewPic) {
  mydiv = document.getElementById("image");
  mydiv.style.backgroundImage = "url(" + previewPic.src + ")";
  mydiv.innerHTML = previewPic.alt;
}

function unDo() {
  mydiv = document.getElementById("image");
  mydiv.style.backgroundImage = "url()";
  mydiv.innerHTML = "Hover over an image below to display here.";
}
