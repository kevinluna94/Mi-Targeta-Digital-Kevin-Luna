document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    animateSections();
    enhanceLinks();
    enableKeyboardShortcuts();
});

function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function animateSections() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const sections = document.querySelectorAll(
        '.profile-section, .agency-section, .datavantex-cta, .action-buttons-section, .skills-section, .footer-quote, .contact-section, .stack-section'
    );

    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(18px)';
        section.style.transition = 'opacity 420ms ease, transform 420ms ease';

        window.setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 120 + (index * 70));
    });
}

function enhanceLinks() {
    const links = document.querySelectorAll('.datavantex-button, .action-button, .social-link');

    links.forEach((link) => {
        link.addEventListener('click', () => {
            link.style.transform = 'translateY(0) scale(0.985)';

            window.setTimeout(() => {
                link.style.transform = '';
            }, 160);
        });
    });
}

function enableKeyboardShortcuts() {
    document.addEventListener('keydown', (event) => {
        if (!(event.ctrlKey || event.metaKey)) {
            return;
        }

        const shortcutMap = {
            d: '.datavantex-button',
            p: '.action-button.portfolio',
            t: '.action-button.store'
        };

        const selector = shortcutMap[event.key.toLowerCase()];
        if (!selector) {
            return;
        }

        const target = document.querySelector(selector);
        if (!target) {
            return;
        }

        event.preventDefault();
        target.click();
    });
}