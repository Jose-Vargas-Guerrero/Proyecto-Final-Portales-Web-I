document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-question');
  
    faqButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Cambia el estado de aria-expanded
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        
        // Muestra u oculta la respuesta asociada
        const answer = this.nextElementSibling;
        answer.hidden = expanded;
      });
    });
  });
  