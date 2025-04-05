document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Obtener y validar los datos del formulario
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if(name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      // Aquí se podría implementar el envío del formulario
      console.log('Nombre:', name);
      console.log('Correo:', email);
      console.log('Mensaje:', message);
  
      // Restablecer el formulario y notificar al usuario
      form.reset();
      alert('¡Gracias por contactarnos!');
    });
  });
  