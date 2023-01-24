console.log("ready")
// preloader setup
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#preloader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#preloader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};
// Setting up the Variables
var bars = document.getElementById("nav_action");
var nav = document.getElementById("menu");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}