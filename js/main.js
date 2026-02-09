// ============================================
// HARISH MARRI - PORTFOLIO INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = 60;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // TYPING EFFECT FOR TERMINAL
    // ============================================
    const typingElements = document.querySelectorAll('.typed-command');

    typingElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.borderRight = '2px solid var(--green)';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50 + Math.random() * 50);
            } else {
                el.style.borderRight = 'none';
            }
        };

        // Start typing after a delay
        setTimeout(typeWriter, 500);
    });

    // ============================================
    // METRIC RING ANIMATION
    // ============================================
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rings = entry.target.querySelectorAll('.ring-progress');
                rings.forEach(ring => {
                    ring.style.transition = 'stroke-dashoffset 1.5s ease-out';
                });
            }
        });
    }, observerOptions);

    const heroMetrics = document.querySelector('.hero-metrics');
    if (heroMetrics) {
        metricObserver.observe(heroMetrics);
    }

    // ============================================
    // SCROLL REVEAL ANIMATION
    // ============================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.commit-item, .tech-node, .info-panel, .philosophy-panel, .process-branch'
    );

    animatableElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        revealObserver.observe(el);
    });

    // ============================================
    // NAV SCROLL EFFECT
    // ============================================
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            nav.style.borderBottomColor = 'rgba(48, 54, 61, 0.8)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.borderBottomColor = 'var(--border)';
            nav.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    });

    // ============================================
    // TECH NODE HOVER EFFECTS
    // ============================================
    const techNodes = document.querySelectorAll('.tech-node');

    techNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const icon = node.querySelector('.node-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.2s ease';
            }
        });

        node.addEventListener('mouseleave', () => {
            const icon = node.querySelector('.node-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // ============================================
    // COMMAND TOOLTIPS ON NAV
    // ============================================
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const cmd = link.getAttribute('data-cmd');
        if (cmd) {
            link.setAttribute('title', cmd);
        }
    });

    // ============================================
    // DYNAMIC YEAR IN FOOTER
    // ============================================
    const yearElement = document.querySelector('.footer-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ============================================
    // CONSOLE EASTER EGG
    // ============================================
    console.log(`
%c╔═══════════════════════════════════════════════════════════╗
%c║                                                           ║
%c║   Hello there, curious developer! 👋                      ║
%c║                                                           ║
%c║   Looking at the console? I like your style.              ║
%c║   Let's connect: harishmarri551@gmail.com                ║
%c║                                                           ║
%c╚═══════════════════════════════════════════════════════════╝
    `,
    'color: #58a6ff; font-family: monospace;',
    'color: #58a6ff; font-family: monospace;',
    'color: #3fb950; font-family: monospace;',
    'color: #58a6ff; font-family: monospace;',
    'color: #8b949e; font-family: monospace;',
    'color: #d29922; font-family: monospace;',
    'color: #58a6ff; font-family: monospace;',
    'color: #58a6ff; font-family: monospace;'
    );
});

// ============================================
// CURSOR TRAIL EFFECT (subtle)
// ============================================
const createParticle = (x, y) => {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(88, 166, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${x}px;
        top: ${y}px;
        transition: all 0.5s ease;
    `;
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'scale(0)';
    }, 10);

    setTimeout(() => {
        particle.remove();
    }, 500);
};

// Throttle mouse move for performance
let lastMove = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastMove > 50) {
        // Disabled by default - uncomment to enable cursor trail
        // createParticle(e.clientX, e.clientY);
        lastMove = now;
    }
});
