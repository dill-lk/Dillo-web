document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    hero.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        hero.style.opacity = 1;
    }, 100);
});
