function scrollHeroImage() {
  const scrollValue = window.scrollY;

  const layer1 = document.getElementById("heroBGLayer1");
  const layer2 = document.getElementById("heroBGLayer2");

  layer1.style.transform = "translateY(" + scrollValue * .50 + "px)";
  layer2.style.transform = "translateY(" + (scrollValue * .25) + "px)";
}