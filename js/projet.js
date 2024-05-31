//projet

// Get the button element
let mybutton = document.getElementById("button");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top of the document when the button is clicked
function topFunction() {
  document.documentElement.scrollTop = 0; 
}

function changeImage1(){
  document.getElementById("imge1").src ="../images/castelimg1.png";
}
function changeImage2(){
  document.getElementById("imge2").src ="../images/VISEMAR.png";
}
function changeImage3(){
  document.getElementById("imge3").src ="../images/SEAS.png";
}
function changeImage4(){
  document.getElementById("imge4").src ="../images/HPeC.png";
}