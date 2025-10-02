const heroImages = [
    "../assets/furniture.jpg",
    "../assets/room.webp",
    "../assets/vecislavas.jpg"
];
const heroSection = document.getElementById('services-hero-carousel');
const bgDivs = [
    heroSection.querySelector('.hero-bg-1'),
    heroSection.querySelector('.hero-bg-2')
];
let heroIndex = 0;
let active = 0;

bgDivs[0].style.backgroundImage = `linear-gradient(#efab00a6, #545454ed), url('${heroImages[0]}')`;
bgDivs[0].classList.add('active');
bgDivs[1].style.backgroundImage = `linear-gradient(#efab00a6, #545454ed), url('${heroImages[1]}')`;

setInterval(() => {
    const next = (active + 1) % 2;
    heroIndex = (heroIndex + 1) % heroImages.length;
    bgDivs[next].style.backgroundImage = `linear-gradient(#efab00a6, #545454ed), url('${heroImages[heroIndex]}')`;
    bgDivs[next].classList.add('active');
    bgDivs[active].classList.remove('active');
    active = next;
}, 3000);