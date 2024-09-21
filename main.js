let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar')

menuIcon.onclick = () => {
        menuIcon.classList.toggle('bxs-x-circle');
        navBar.classList.toggle('active');
}


