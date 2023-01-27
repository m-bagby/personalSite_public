const navList = document.getElementsByClassName("navList")[0];
const navIcon = document.getElementsByClassName("navIcon")[0];

//Open or close the responsive nav menu
function toggleResponsiveNavDisplay() {
  if (navList.classList.contains("responsiveOpen")) {
    navList.classList.remove("responsiveOpen");
    navList.style.maxHeight = navIcon.offsetHeight + "px";
  }
  else {
    navList.classList.add("responsiveOpen");
    navList.style.maxHeight = navList.scrollHeight + "px";
  }
}

//Close the responsive nav menu
function closeResponsiveNav() {
  if (navList.classList.contains("responsiveOpen")) {
    navList.classList.remove("responsiveOpen");
    navList.style.maxHeight = navIcon.offsetHeight + "px";
  }
}