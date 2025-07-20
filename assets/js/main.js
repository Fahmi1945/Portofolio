document.addEventListener('DOMContentLoaded', function () {
    // --- Fungsionalitas Menu Mobile ---
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');

    // Toggle menu saat tombol hamburger di-klik
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Menutup menu mobile setelah link di-klik
    if (mobileNavLinks.length > 0 && mobileMenu) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Fungsionalitas Navigasi Aktif saat Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-menu a.nav-link');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('nav-active');
                }
            });
        });
    }

    // --- Inisialisasi Animasi ScrollReveal ---
    // Pastikan ScrollReveal sudah dimuat
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200,
            reset: false // Animasi hanya berjalan sekali
        });

        sr.reveal('.reveal-left', { origin: 'left' });
        sr.reveal('.reveal-right', { origin: 'right' });
        sr.reveal('.reveal-fade', { origin: 'top', distance: '30px' });
        sr.reveal('.reveal-skill', { interval: 100 }); // Muncul satu per satu
    }
});
