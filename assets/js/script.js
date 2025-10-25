// Auto update the year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const menuBackdrop = document.getElementById('menu-backdrop');

// Open mobile menu
function openMobileMenu() {
    mobileMenu.classList.add('show');
    document.body.classList.add('menu-open');
    menuToggle.classList.add('active');
}

// Close mobile menu
function closeMobileMenu() {
    mobileMenu.classList.remove('show');
    document.body.classList.remove('menu-open');
    menuToggle.classList.remove('active');
}

// Event listeners
menuToggle.addEventListener('click', openMobileMenu);
menuClose.addEventListener('click', closeMobileMenu);
menuBackdrop.addEventListener('click', closeMobileMenu);

// Close menu when clicking on menu links
document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
        closeMobileMenu();
    }
});

// Close menu on window resize to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('show')) {
        closeMobileMenu();
    }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
});
