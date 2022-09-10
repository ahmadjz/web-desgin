const message = (message) => {
  console.log(message);
  document.getElementById("myoutput").innerHTML = message;
};

const hideText = () => {
  text = document.getElementById("myText");
  // text.style.visibility = "hidden";
  text.className = "closed";
};

const showText = () => {
  text = document.getElementById("myText");
  text.style.visibility = "visible";
};
