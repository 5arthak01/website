caa = document.getElementById("nrc");
// console.log(1);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    caa.style.display = "block";
  } else {
    caa.style.display = "none";
  }
}

function gototop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}