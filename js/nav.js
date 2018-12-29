// toggle
var icon = document.getElementById("togglenav");
var icon1 = document.getElementById("h_first");
var icon2 = document.getElementById("h_second");
var icon3 = document.getElementById("h_third");
var nav = document.getElementById('hiddennav');
var cover = document.getElementById("nav-cover");

togglenav.addEventListener('click', function() {
  icon1.classList.toggle('h_first');
  icon2.classList.toggle('h_second');
  icon3.classList.toggle('h_third');
  cover.classList.toggle('show');
  nav.classList.toggle('slide');
});
