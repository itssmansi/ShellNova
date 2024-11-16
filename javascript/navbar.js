    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.nav-bar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Toggle navigation menu for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('open');
    });     