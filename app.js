const openMenu1 = document.querySelector('.menu1');
const Arrow1 = document.querySelector('.arrow1')
const openMenu2 = document.querySelector('.menu2');
const Arrow2 = document.querySelector('.arrow2')


document.querySelector('.btn1').addEventListener('click', function () {
    this.classList.toggle('active');
    openMenu1.classList.toggle('active');
    Arrow1.classList.toggle('active')
});

document.querySelector('.btn2').addEventListener('click', function () {
    this.classList.toggle('active');
    openMenu2.classList.toggle('active');
    Arrow2.classList.toggle('active')
});