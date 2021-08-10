// MOBILE NAV BAR - BARS CLICK STUFF

const selectElement = (s) => document.querySelector(s);
// Open the menu on click
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

// Open the menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

// slider stuff
// $(document).ready(function () {
//   $("#Carousel").carousel({
//     interval: 5000,
//   });
// });

// JavaScript Document
// $(document).ready(function () {
//   $("#autoWidth").lightSlider({
//     autoWidth: true,
//     loop: true,
//     onSliderLoad: function () {
//       $("#autoWidth").removeClass("cS-hidden");
//     },
//   });
// });
