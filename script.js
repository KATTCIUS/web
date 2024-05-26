function myFunction() {
  var x = document.getElementById("myLinks");
  var icon = document.querySelector(".icon i");
  if (x.style.display === "block") {
    x.style.display = "none";
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-bars");
  } else {
    x.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-minus");
  }
}