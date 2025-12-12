document.addEventListener('DOMContentLoaded', function() {
   
    const modal = document.getElementById('personagem-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalAbility = document.getElementById('modal-ability');
    

    const personagemData = {
        'Alok': {
            descricao: "Um DJ global que traz ritmo e cura para o campo de batalha.",
            habilidade: "Drop the Beat: Aura de 5m que aumenta a velocidade de movimento em 15% e recupera 5 HP/s por 10s."
        },
        'Kelly': {
            descricao: "Uma velocista nata, sempre em busca de novas aventuras e desafios.",
            habilidade: "Dash: Aumenta a velocidade de corrida em 6%."
        },
        'Chrono': {
            descricao: "Um caçador de recompensas de outra dimensão, mestre em defesa e ataque surpresa.",
            habilidade: "Escudo de Força: Cria um campo que bloqueia 600 de dano. Permite atirar de dentro."
        }
    };


    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });


    document.querySelectorAll('[data-action="open-modal"]').forEach(button => {
        button.addEventListener('click', function() {
            const personagem = this.getAttribute('data-personagem');
            const data = personagemData[personagem];
            
            if (data) {
                modalTitle.textContent = `Detalhes de ${personagem}`;
                modalDescription.textContent = data.descricao;
                modalAbility.textContent = data.habilidade;
                modal.style.display = 'block';
            }
        });
    });


    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    
 
    document.querySelectorAll('[data-action="toggle-info"]').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
            
                targetElement.classList.toggle('active');

         
                if (targetElement.classList.contains('active')) {
                    this.textContent = 'Ocultar Informação';
                } else {
                    this.textContent = targetId === 'ar-info' ? 'Guia de Anexos' : 'Estatísticas';
                }
            }
        });
    });


    document.querySelectorAll('.btn-secondary, .btn-primary').forEach(button => {
        const action = button.getAttribute('data-action');
        

        if (!action || (action !== 'open-modal' && action !== 'toggle-info')) {
            button.addEventListener('click', function() {

                const buttonText = this.textContent.trim();
                
                let feedbackMessage = `Ação para "${buttonText}" executada!`;

                if (buttonText === 'JOGUE AGORA') {
                    feedbackMessage = 'Redirecionando para a página de download... (Simulação)';
                } else if (buttonText === 'Ver Guia de Utilidade') {
                    feedbackMessage = 'Guia de utilidade de itens carregado! (Simulação)';
                } else if (buttonText === 'Mais Info' || buttonText === 'Patch Notes') {
                    feedbackMessage = `Lendo detalhes do evento: "${buttonText}". (Simulação)`;
                } else {
                    feedbackMessage = `Ação de navegação para "${buttonText}" iniciada. (Simulação)`;
                }

                modalTitle.textContent = 'Ação Concluída';
                modalDescription.textContent = feedbackMessage;
                modalAbility.textContent = 'Em uma página real, você seria redirecionado ou veria o conteúdo carregado aqui.';
                modal.style.display = 'block';

            });
        }
    });
});
