const formularioLogin = document.querySelector('[data-formularioL]');

  formularioLogin.addEventListener('submit', (evento) => {
    // Evita que el formulario se envíe automáticamente
    evento.preventDefault();

    // Verifica que los campos estén correctamente cumplimentados
    const emailL = document.querySelector('[data-emailL]').value;
    const passwordL = document.querySelector('[data-passwordL]').value;

    if (!emailL || !passwordL) {
      // Si los campos no están cumplimentados correctamente, muestra un mensaje de error
      alert('Por favor, complete todos los campos del formulario.');
    } else {
      // Si los campos están cumplimentados correctamente, cambia la propiedad `action` del formulario y envía el formulario
      window.location.href = 'producto.html';
    }
    });
