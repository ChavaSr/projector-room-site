// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', function () {
            links.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        links.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                links.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }

    // Subtle nav background on scroll
    var nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 60) {
                nav.style.borderBottomColor = 'rgba(201,168,76,0.25)';
            } else {
                nav.style.borderBottomColor = 'rgba(201,168,76,0.15)';
            }
        });
    }
});
