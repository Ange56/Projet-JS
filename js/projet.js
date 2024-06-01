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


let isImage1Visible = true;
let isImage2Visible = true;
function changeImage2(){
    // Get the image element
    const imageElement = document.getElementById("imge2");

    // Toggle between the two image sources
  if (isImage2Visible) {
    imageElement.src = "../images/VISEMAR.png";
  } else {
    imageElement.src = "../images/VISEMARimg4.png";
  }
  // Update the image state
  isImage2Visible = !isImage2Visible;
 // Attach the click event listener to the image
 
}
document.getElementById("imge2").addEventListener("click", changeImage2);

function changeImage3(){
  // Get the image element
  const imageElement = document.getElementById("imge3");

  // Toggle between the two image sources
  if (isImage2Visible) {
    imageElement.src = "../images/SEAS.png";  
  } else {
    imageElement.src = "../images/SEASimg4.png";
  }
// Update the image state
  isImage2Visible = !isImage2Visible;
// Attach the click event listener to the image

}
document.getElementById("imge3").addEventListener("click", changeImage3);



function changeImage4(){
  // Get the image element
  const imageElement = document.getElementById("imge4");

  // Toggle between the two image sources
  if (isImage2Visible) {
    imageElement.src = "../images/HPeC.png";  
  } else {
    imageElement.src = "../images/Malakoff_Humanis4.jpg";
  }
// Update the image state
  isImage2Visible = !isImage2Visible;
// Attach the click event listener to the image

}
document.getElementById("imge4").addEventListener("click", changeImage4);



// Initialize a variable to keep track of the current image state


function changeImage1(){
  console.log("yey");
  // Get the image element
  const imageElement = document.getElementById("imge1");
  console.log("yey2");

  // Toggle between the two image sources
  if (isImage1Visible) {
    imageElement.src = "../images/castelimg1.png";
  } else {
    imageElement.src = "../images/castel4.jpg";
  }

  // Update the image state
  isImage1Visible = !isImage1Visible;
}
// Attach the click event listener to the image
document.getElementById("imge1").addEventListener("click", changeImage1);

