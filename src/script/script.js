// Navigation
const navbarLinkElement = document.createElement('div');
navbarLinkElement.classList.add('navbar-links');
navbarLinkElement.innerHTML = `
  <ul>
  <li><a href="#Home">Home</a></li>
  <li><a href="#About">About</a></li>
  <li><a href="#Contact">Contact</a></li>
  <li><a href="#Blog">Blog</a></li>
  <li><a href="#Careers">Careers</a></li>
  </ul>
`;

// hamburger button
const buttonHamburger = document.createElement('button');
buttonHamburger.classList.add('button-menu');

// html selector
const navbar = document.querySelector('.navbar');
const navbarMobile = document.querySelector('#nav-mobile');
const hamburgerMenu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="11" class="hamburger-menu"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>';
const closeButton = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" class="close-menu"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>';


// add to html
navbar.insertBefore(navbarLinkElement, navbar.children[1]);
navbarMobile.append(navbarLinkElement.cloneNode(true));
navbar.appendChild(buttonHamburger);
buttonHamburger.innerHTML = `
  ${hamburgerMenu}  
  ${closeButton}
`;

buttonHamburger.addEventListener('click', () => {
  document.querySelector('#nav-mobile .navbar-links').classList.toggle('active');
  buttonHamburger.classList.toggle('active');
});
