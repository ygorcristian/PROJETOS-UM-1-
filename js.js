document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    const personagemModal = document.getElementById('personagem-modal');
    const personagemModalClose = personagemModal.querySelector('[data-action="close-modal"]');
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

    function openModal(modalElement) {
        modalElement.style.display = 'block';
    }

    function closeModal(modalElement) {
        modalElement.style.display = 'none';
    }

    menuToggle.addEventListener('click', () => nav.classList.toggle('active'));
    navLinks.forEach(link => link.addEventListener('click', () => nav.classList.remove('active')));

    personagemModalClose.addEventListener('click', () => closeModal(personagemModal));
    
    window.addEventListener('click', function(event) {
        if (event.target == personagemModal) {
            closeModal(personagemModal);
        }
    });

    document.querySelectorAll('[data-action="open-modal"]').forEach(button => {
        button.addEventListener('click', function() {
            const personagem = this.getAttribute('data-personagem');
            const data = personagemData[personagem];
            if (data) {
                modalTitle.textContent = `Detalhes de ${personagem}`;
                modalDescription.textContent = data.descricao;
                modalAbility.textContent = data.habilidade;
                openModal(personagemModal);
            }
        });
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
    
    document.querySelectorAll('[data-action="info-modal"]').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const feedbackMessage = (buttonText === 'JOGUE AGORA') ? 
                'Redirecionando para o download do Free Fire... (Simulação)' : 
                `Conteúdo para "${buttonText}" carregado com sucesso. (Simulação)`;
            
            modalTitle.textContent = 'Ação Concluída';
            modalDescription.textContent = feedbackMessage;
            modalAbility.textContent = 'Em uma página real, o conteúdo seria exibido ou o link seria aberto.';
            openModal(personagemModal);
        });
    });
});
