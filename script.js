document.addEventListener('DOMContentLoaded', function() {
    // Configuración inicial
    init();
    
    // Efectos de interacción
    setupInteractions();
    
    // Inicializar partículas
    initParticles();
});

function init() {
    // Establecer año actual
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Efecto de entrada
    animateElements();
    
    // Mostrar mensaje de bienvenida
    showWelcomeMessage();
}

function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#2563eb", "#7c3aed", "#10b981"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.3,
                    random: true
                },
                size: {
                    value: 2,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

function animateElements() {
    // Animación escalonada de elementos
    const elements = document.querySelectorAll('.profile-section, .agency-section, .action-buttons-section, .skills-section, .social-section, .footer-quote');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
}

function setupInteractions() {
    // Efecto de clic en botones de acción
    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Efecto de pulsación
            this.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Abrir enlace después de la animación
            const href = this.getAttribute('href');
            if (href && !href.startsWith('#')) {
                e.preventDefault();
                setTimeout(() => {
                    window.open(href, '_blank');
                }, 200);
            }
        });
        
        // Efecto de brillo al pasar el mouse
        button.addEventListener('mouseenter', function() {
            const buttonType = this.classList.contains('datavantex') ? 'datavantex' :
                             this.classList.contains('portfolio') ? 'portfolio' : 'store';
            
            // Agregar efecto de brillo
            const glow = document.createElement('div');
            glow.className = 'button-glow';
            glow.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: inherit;
                filter: blur(20px);
                opacity: 0;
                z-index: 0;
                border-radius: 12px;
                animation: glowFadeIn 0.3s forwards;
            `;
            
            this.appendChild(glow);
            
            setTimeout(() => {
                if (glow.parentNode === this) {
                    glow.style.animation = 'glowFadeOut 0.3s forwards';
                    setTimeout(() => glow.remove(), 300);
                }
            }, 600);
        });
    });
    
    // Efecto hover en tarjetas de habilidades
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Efecto hover en enlaces sociales
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de agencia
    const agencySection = document.querySelector('.agency-section');
    if (agencySection) {
        agencySection.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.agency-icon');
            icon.style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        agencySection.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.agency-icon');
            icon.style.transform = 'rotate(0) scale(1)';
        });
    }
    
    // Agregar estilos para efectos
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glowFadeIn {
            from { opacity: 0; }
            to { opacity: 0.5; }
        }
        
        @keyframes glowFadeOut {
            from { opacity: 0.5; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

function showWelcomeMessage() {
    setTimeout(() => {
        console.log('%c💼 Kevin Luna - Desarrollador Full Stack & Data Scientist', 'color: #2563eb; font-size: 18px; font-weight: bold;');
        console.log('%cTransformando ideas en soluciones digitales', 'color: #7c3aed; font-size: 14px;');
        console.log('%c¡Gracias por visitar mi tarjeta de contacto!', 'color: #10b981; font-size: 12px;');
    }, 1000);
}

// Mejorar la experiencia de teclado
document.addEventListener('keydown', function(e) {
    // Atajos de teclado para los botones principales
    if (e.ctrlKey) {
        switch(e.key.toLowerCase()) {
            case 'd':
                e.preventDefault();
                document.querySelector('.action-button.datavantex').click();
                break;
            case 'p':
                e.preventDefault();
                document.querySelector('.action-button.portfolio').click();
                break;
            case 't':
                e.preventDefault();
                document.querySelector('.action-button.store').click();
                break;
        }
    }
});

// Prevenir efectos no deseados en dispositivos táctiles
let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // Mejorar experiencia táctil
    const buttons = document.querySelectorAll('.action-button, .social-link');
    buttons.forEach(button => {
        button.style.cursor = 'pointer';
        button.style.tapHighlightColor = 'transparent';
        button.style.webkitTapHighlightColor = 'transparent';
    });
}

// Optimizar rendimiento
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Aquí se pueden agregar efectos de parallax si se desean
            ticking = false;
        });
        ticking = true;
    }
});

// Manejar redimensionamiento
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recargar partículas si es necesario
        if (typeof particlesJS !== 'undefined') {
            particlesJS();
        }
    }, 250);
});

// Efecto de carga inicial
window.addEventListener('load', function() {
    const card = document.querySelector('.card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(function() {
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300);
});