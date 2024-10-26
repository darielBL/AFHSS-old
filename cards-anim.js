const member1 = document.getElementById('member1');
const member2 = document.getElementById('member2');
const pic1 =document.getElementById('pic1');
const pic2 =document.getElementById('pic2');

member1.addEventListener('mouseenter', () => {
    member1.classList.add('animation');
    pic1.classList.add('animation2')

});

member1.addEventListener('mouseleave', () => {
    member1.classList.remove('animation');
    pic1.classList.remove('animation2')
});

member2.addEventListener('mouseenter', () => {
    member2.classList.add('animation');
    pic2.classList.add('animation2')
});

member2.addEventListener('mouseleave', () => {
    member2.classList.remove('animation');
    pic2.classList.remove('animation2')
});
