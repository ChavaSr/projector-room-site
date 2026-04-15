// Poster Wheel Carousel
(function () {
    var wheel = document.getElementById('posterWheel');
    if (!wheel) return;

    var items = wheel.querySelectorAll('.poster-wheel-item');
    var total = items.length;
    var angle = 360 / total;
    var rotation = 0;
    var autoTimer;

    function step(dir) {
        rotation -= dir * angle;
        wheel.style.transform = 'rotateY(' + rotation + 'deg)';
    }

    function startAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(function () { step(1); }, 5000);
    }

    var btnPrev = document.getElementById('wheelPrev');
    var btnNext = document.getElementById('wheelNext');

    if (btnPrev) {
        btnPrev.addEventListener('click', function () { step(-1); startAuto(); });
    }

    if (btnNext) {
        btnNext.addEventListener('click', function () { step(1); startAuto(); });
    }

    startAuto();

    // Starfield
    var field = document.getElementById('starsField');
    if (field) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 120; i++) {
            var s = document.createElement('div');
            var size = Math.random() * 2 + 0.8;
            s.className = 'star-dot' + (Math.random() < 0.08 ? ' gold' : '');
            s.style.cssText = [
                'left:' + (Math.random() * 100) + '%',
                'top:' + (Math.random() * 100) + '%',
                'width:' + size + 'px',
                'height:' + size + 'px',
                '--dur:' + (Math.random() * 4 + 2) + 's',
                '--delay:' + (Math.random() * 4) + 's'
            ].join(';');
            fragment.appendChild(s);
        }
        field.appendChild(fragment);
    }
}());

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
