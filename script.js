document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('.material-icons');
            icon.textContent = navLinks.classList.contains('active') ? 'close' : 'menu';
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.querySelector('.material-icons').textContent = 'menu';
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

    const btnTop = document.getElementById('back-to-top');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        if (btnTop) {
            if (window.scrollY > 600) {
                btnTop.classList.add('show');
            } else {
                btnTop.classList.remove('show');
            }
        }
    });

    if (btnTop) {
        btnTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const overlay = document.getElementById('loading-overlay');
    const loadingText = overlay ? overlay.querySelector('p') : null;
    
    const frasesLoading = [
        "Você não vai se arrepender!",
        "Abrindo o cardápio do Gigante...",
        "Prepare o estômago, o Léo tá caprichando!",
        "O melhor do Ibura em um segundo...",
        "Haja fome para tudo o que você vai ver!",
        "Carregando o sabor que você respeita...",
        "Só um segundo, estamos preparando o seu rango!"
    ];

    const botoesCardapio = document.querySelectorAll('a[href*="nexpedidos.com/dogaodoleo"]');

    botoesCardapio.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            const linkDestino = this.getAttribute('href');

            if (overlay && loadingText) {
                const fraseAleatoria = frasesLoading[Math.floor(Math.random() * frasesLoading.length)];
                loadingText.innerText = fraseAleatoria;

                overlay.classList.add('active');

                setTimeout(() => {
                    window.location.href = linkDestino;
                }, 1000);
            } else {
                window.location.href = linkDestino;
            }
        });
    });
});

const API_URL = 'https://script.google.com/macros/s/AKfycbzBq5l0OXn89OoBvuYBFcns4uyGuRh9aa33IOWTKyBj3FY4mopceSnpeZ2WZA2sUQmHCg/exec';

async function carregarDepoimentos() {
    const container = document.getElementById('container-depoimentos');
    
    try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();
        
        if (!dados || dados.length === 0) {
            container.innerHTML = '<p style="text-align:center; color: #666; padding: 20px;">O pessoal deve estar ocupado demais comendo... 😋 <br> Seja o primeiro a avaliar e apareça aqui no nosso mural!</p>';
            return;
        }

        const ultimos3 = dados.slice(-3).reverse();
        container.innerHTML = '';

        ultimos3.forEach(d => {
            let estrelasHTML = '';
            for (let i = 1; i <= 5; i++) {
                estrelasHTML += i <= d.nota 
                    ? '<span class="star filled">★</span>' 
                    : '<span class="star empty">★</span>';
            }

            const card = document.createElement('div');
            card.classList.add('testimonial-card');
            card.innerHTML = `
                <div class="stars">${estrelasHTML}</div>
                <p>"${d.comentario}"</p>
                <strong>- ${d.nome}</strong>
            `;
            container.appendChild(card);
        });
    } catch (erro) {
        console.error("Erro ao carregar depoimentos:", erro);
    }
}

document.addEventListener('DOMContentLoaded', carregarDepoimentos);