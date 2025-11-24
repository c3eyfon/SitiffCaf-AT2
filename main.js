/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
/* SHOW MENU */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');

        navToggle.classList.add('disabled-toggle');
    })
};

/* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');

        navToggle.classList.remove('disabled-toggle');
    })
};

/* REMOVE MENU MOBILE WHEN LINK CLICKED */
navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('disabled-toggle');
}));


