let prevScrollPos = window.scrollY; //previous scroll position
let lastScrollingUp = false; //track if the user was last scrolling up or down

//Hide header scrolling down and display header scrolling up
function setHeader() {
  const currentScrollPos = window.scrollY;

  //scrolling up
  if (prevScrollPos > currentScrollPos) {
    //if the top of the navbar reaches the top of the window, fix it to the top
    if (document.getElementById("navbar").offsetTop >= currentScrollPos) {
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.top = "0";
    }

    //if the navbar is not in the window, set the bottom of it to the top of the window
    else if (!lastScrollingUp && document.getElementById("navbar").offsetTop + document.getElementById("navbar").offsetHeight < currentScrollPos) {
      document.getElementById("navbar").style.position = "absolute";
      document.getElementById("navbar").style.top = currentScrollPos - document.getElementById("navbar").offsetHeight + "px";
    }

    lastScrollingUp = true;
  }
  //scrolling down
  else {
    //if the navbar was fixed to the top of the window, set it to absolute at the top of the window
    if (lastScrollingUp && document.getElementById("navbar").style.position === "fixed") {
      document.getElementById("navbar").style.position = "absolute";
      document.getElementById("navbar").style.top = currentScrollPos + "px";
    }

    lastScrollingUp = false;
  }

  prevScrollPos = currentScrollPos;
}