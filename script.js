document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.topnav') || document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.topnav a, .nav-item');
    const topLinks = document.querySelectorAll('.topnav a');

    const setActive = (link) => {
        topLinks.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
    };

    topLinks.forEach(link => {
        link.addEventListener('click', () => setActive(link));
    });

    // Scrollspy: highlight menu item for section in view
    const spyMap = new Map();
    topLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            const sec = document.querySelector(href);
            if (sec) spyMap.set(sec, link);
        }
    });
    const homeLink = document.querySelector('.topnav a[href="#"]');
    if ('IntersectionObserver' in window && spyMap.size) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) setActive(spyMap.get(e.target));
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        spyMap.forEach((_, sec) => obs.observe(sec));
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY < 200 && homeLink) setActive(homeLink);
    }, { passive: true });

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active'); // specific animation for burger if needed
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});
