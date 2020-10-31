// This function is modeled after the one used in the W3Schools example
// Link: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }