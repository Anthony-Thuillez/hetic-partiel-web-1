var burgerMenu = document.querySelector('#burgermenucontainer');
var nav = document.querySelector('#mainav ul');

burgerMenu.addEventListener('click', function() {
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});

var headerFixe = document.querySelector('#header');

document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    headerFixe.style.marginTop = "-80px";
  } else if (event.deltaY < 0) {
    headerFixe.style.marginTop = "";
  }
})