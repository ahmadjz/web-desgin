const myArray = ["ahmad1", "ahmad2", "ahmad3", "ahmad3"];

const init = () => {
  document.getElementById("names").innerHTML = myArray;
};

const addName = () => {
  const newName = prompt("add name");
  myArray.push(newName);
  document.getElementById("names").innerHTML = myArray;
};
