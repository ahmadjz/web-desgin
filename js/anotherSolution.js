function billingFunction() {
  if (document.getElementById("same").checked) {
    var billing = document.getElementById("shippingName").value;
    var zip = document.getElementById("shippingZip").value;
    document.getElementById("billingName").setAttribute("value", billing);
    document.getElementById("billingZip").setAttribute("value", zip);
  } else {
    document.getElementById("billingName").removeAttribute("value");
    document.getElementById("billingZip").removeAttribute("value");
  }
}
