function toggleMenu() {
    const menu = document.querySelector('.navigation-menu');
    menu.classList.toggle('active');
}
//  // Simple carousel auto-slide
//  const carousel = document.querySelector('.carousel');
//  let index = 0;
//  setInterval(() => {
//      index = (index + 1) % 2;
//      carousel.style.transform = `translateX(-${index * 100}%)`;
//  }, 5000);

//  // Back to top visibility
//  window.addEventListener('scroll', () => {
//      const backToTop = document.querySelector('.back-to-top');
//      if (window.scrollY > 300) {
//          backToTop.classList.add('visible');
//      } else {
//          backToTop.classList.remove('visible');
//      }
//  });

//  function toggleMenu() {
//     const menu = document.querySelector('.navigation-menu');
//     menu.classList.toggle('active');
// }

// Simple carousel auto-slide
const carousel = document.querySelector('.carousel');
let index = 0;
setInterval(() => {
    index = (index + 1) % 2;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}, 5000);

// Back to top visibility
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navigation-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        const targetId = link.getAttribute('href').substring(1); // Get section ID (e.g., 'about' from '/about')
        let targetSection;

        // Map navigation links to corresponding sections
        switch (targetId) {
            case '':
            case '/':
                targetSection = document.querySelector('.carousel-container'); // Home section
                break;
            case 'about':
                targetSection = document.querySelector('.about-container');
                break;
            case 'service':
                targetSection = document.querySelector('.service-top-container');
                break;
            case 'contact':
                targetSection = document.querySelector('.footer-container');
                break;
            default:
                return; // Do nothing for 'Pages' or other links
        }

        if (targetSection) {
            // Calculate offset for fixed navbar (adjust 80px based on navbar height)
            const navbarHeight = document.querySelector('.navbar-container').offsetHeight;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update active class
            document.querySelectorAll('.navigation-link').forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Handle Pages dropdown items
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        let targetSection;

        switch (targetId) {
            case 'booking':
                targetSection = document.querySelector('.booking-container');
                break;
            case 'team':
                targetSection = document.querySelector('.team-container');
                break;
            case 'testimonial':
                targetSection = document.querySelector('.testimonial-container');
                break;
            case '404':
                return; // Handle 404 page separately if needed
        }

        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar-container').offsetHeight;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update active class for parent Pages link
            const pagesLink = document.querySelector('.navigation-link.dropdown-toggle');
            document.querySelectorAll('.navigation-link').forEach(nav => nav.classList.remove('active'));
            pagesLink.classList.add('active');
        }
    });
});