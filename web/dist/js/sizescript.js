//Offset body paddingtop based off of nav height

const nav = document.querySelector('.wrapper-nav');
const main = document.querySelector('.content');
let topOfNav = nav.offsetTop;
main.style.paddingTop = nav.offsetHeight + 'px';

function adjustContent() {
    main.style.paddingTop = nav.offsetHeight + 'px';
}

window.addEventListener('resize', adjustContent);
