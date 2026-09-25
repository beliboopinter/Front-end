document.addEventListener("DOMContentLoaded", () => {
    // 1. Corrige dinamicamente o nome no rodapé
    const footerText = document.querySelector("footer p");
    if (footerText) {
        footerText.innerHTML = `&copy; ${new Date().getFullYear()} Isabeli Pinter. Todos os direitos reservados.`;
    }

    // 2. Rolagem suave para os links do menu
    const menuLinks = document.querySelectorAll("nav a");
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 3. Efeito de surgimento (fade-in) ao rolar a página
    const secoes = document.querySelectorAll("section");
    
    // Configura o estilo inicial de sumido via JS para não quebrar a página sem script
    secoes.forEach(secao => {
        secao.style.opacity = "0";
        secao.style.transform = "translateY(20px)";
        secao.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    const verificarRolagem = () => {
        const gatilhoAparicao = (window.innerHeight / 5) * 4;
        
        secoes.forEach(secao => {
            const topoSecao = secao.getBoundingClientRect().top;
            
            if (topoSecao < gatilhoAparicao) {
                secao.style.opacity = "1";
                secao.style.transform = "translateY(0)";
            }
        });
    };

    // Executa uma vez ao carregar e depois a cada rolagem
    verificarRolagem();
    window.addEventListener("scroll", verificarRolagem);
});
