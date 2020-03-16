const navOverlay = document.getElementById('navOverlay');
const navBar = document.getElementById('mobileNav');
const navBarContent = document.getElementById('navDropDownMenu');
const navBarLinks = [...navBarContent.children];
const navOpen = '<a href="#"><i class="fas fa-times size-34"></i></a>';
const navClose = '<a href="#"><i class="fas fa-bars size-26"></i></a>';
let isOpen = false;

function NavMenu(){
  isOpen = !isOpen;
  navBarContent.classList.toggle('hide');
  navOverlay.classList.toggle('hide');

  if (isOpen){
    navBar.innerHTML = navOpen;
    
  } else {
    navBar.innerHTML = navClose;
  }
  
}

navOverlay.addEventListener('click', NavMenu);
navBar.addEventListener('click', NavMenu);
navBarLinks.map( i => i.addEventListener('click', NavMenu));