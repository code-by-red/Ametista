/* ========================================
   AMETISTA - TAROT DE LUXO
   JavaScript - Animações Mágicas
   ======================================== */

// ========================================
// PARTÍCULAS MÁGICAS
// ========================================

function createMagicParticles() {
    const container = document.querySelector('.magic-particles');
    const particleCount = 50;
    const emojis = ['🃜', '🃚', '🃖', '🃁', '🂭', '🂺'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (5 + Math.random() * 15) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // Adicionar emoji aleatório
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        particle.textContent = emoji;
        particle.style.fontSize = '1.2rem';
        particle.style.width = 'auto';
        particle.style.height = 'auto';
        particle.style.background = 'none';
        particle.style.boxShadow = 'none';
        
        container.appendChild(particle);
    }
}

// ========================================
// CARTAS DE TAROT FLUTUANDO
// ========================================

function createFloatingCards() {
    const container = document.querySelector('.floating-cards-container');
    const cardCount = 8;
    const cardEmojis = ['🃜', '🃚', '🃖', '🃁', '🂭', '🂺', '🃜', '🃚'];

    for (let i = 0; i < cardCount; i++) {
        const card = document.createElement('div');
        card.className = 'floating-card';
        card.style.left = Math.random() * 100 + '%';
        card.style.top = Math.random() * 100 + '%';
        card.style.animationDuration = (8 + Math.random() * 6) + 's';
        card.style.animationDelay = i * 0.5 + 's';
        card.textContent = cardEmojis[i % cardEmojis.length];
        
        container.appendChild(card);
    }
}

// ========================================
// ORBE MÁGICO (Segue o mouse)
// ========================================

function setupMagicOrb() {
    const orb = document.querySelector('.magic-orb');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX - orb.offsetWidth / 2;
        const y = e.clientY - orb.offsetHeight / 2;
        
        orb.style.left = x + 'px';
        orb.style.top = y + 'px';
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar seções
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ========================================
// EFEITO DE GLOW NO MOUSE
// ========================================

function setupMouseGlow() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });
}

// ========================================
// EFEITO DE MAGIA AO CLICAR
// ========================================

function setupClickMagic() {
    document.addEventListener('click', (e) => {
        // Criar explosão de partículas mágicas
        createClickMagic(e.clientX, e.clientY);
    });
}

function createClickMagic(x, y) {
    const emojis = ['🃜', '🃚', '🃖', '🃁', '🂭', '🂺'];
    const particleCount = 8;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.fontSize = '1.5rem';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        let life = 1;

        const animate = () => {
            x += vx;
            y += vy;
            life -= 0.02;

            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = life;

            if (life > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        animate();
    }
}

// ========================================
// ANIMAÇÃO DE TÍTULO BRILHANTE
// ========================================

function setupTitleAnimation() {
    const title = document.querySelector('.title');
    
    if (title) {
        title.addEventListener('mouseenter', () => {
            title.style.animation = 'none';
            setTimeout(() => {
                title.style.animation = 'glow-text 3s ease-in-out infinite';
            }, 10);
        });
    }
}

// ========================================
// SMOOTH SCROLL PARA LINKS
// ========================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// EFEITO DE DIGITAÇÃO NO TÍTULO
// ========================================

function setupTypewriterEffect() {
    const title = document.querySelector('.title');
    if (!title) return;

    const text = title.textContent;
    title.textContent = '';
    let index = 0;

    const typeWriter = () => {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };

    // Iniciar após um pequeno delay
    setTimeout(typeWriter, 500);
}

// ========================================
// PARALLAX EFFECT
// ========================================

function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
        }
    });
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🔮 Ametista - Tarot de Luxo iniciado com magia! ✨');
    
    createMagicParticles();
    createFloatingCards();
    setupMagicOrb();
    setupScrollAnimations();
    setupMouseGlow();
    setupClickMagic();
    setupTitleAnimation();
    setupSmoothScroll();
    setupTypewriterEffect();
    setupParallax();
    
    // Adicionar classe de magia ao body
    document.body.classList.add('magic-hover');
});

// ========================================
// EFEITO DE MAGIA CONTÍNUO
// ========================================

// Criar novas partículas continuamente
setInterval(() => {
    const container = document.querySelector('.magic-particles');
    if (container && container.children.length < 100) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '0%';
        particle.style.animationDuration = (5 + Math.random() * 15) + 's';
        particle.style.animationDelay = '0s';
        
        const emojis = ['🃜', '🃚', '🃖', '🃁', '🂭', '🂺'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        particle.textContent = emoji;
        particle.style.fontSize = '1.2rem';
        particle.style.width = 'auto';
        particle.style.height = 'auto';
        particle.style.background = 'none';
        particle.style.boxShadow = 'none';
        
        container.appendChild(particle);

        // Remover partícula após animação
        setTimeout(() => {
            particle.remove();
        }, 20000);
    }
}, 500);

// ========================================
// EFEITO DE BRILHO MÁGICO NO SCROLL
// ========================================

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const light = document.querySelector('.magic-light');
    
    if (light) {
        light.style.opacity = (100 - scrollPercent) / 100;
    }
});

// ========================================
// INTERATIVIDADE COM CARDS
// ========================================

document.querySelectorAll('.service-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        // Criar efeito de magia ao clicar no card
        const rect = card.getBoundingClientRect();
        createClickMagic(rect.left + rect.width / 2, rect.top + rect.height / 2);
        
        // Adicionar animação de vibração
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'pulse 0.5s ease-in-out';
        }, 10);
    });
});

// Adicionar animação de pulse ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(style);
