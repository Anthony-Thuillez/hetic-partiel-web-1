var burgermenu = document.querySelector('#burgermenucontainer');
var nav = document.querySelector('#mainav ul');

burgermenu.addEventListener('click', function() {
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});