window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 3px";
    document.getElementById("name").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "15px 4px";
    document.getElementById("name").style.fontSize = "25px";
  }
}
