document.addEventListener('DOMContentLoaded', function() {
    // Captura el formulario
    const formulario = document.querySelector('.agrega');
    // Agrega un evento de escucha para cuando el usuario envíe el formulario
    formulario.addEventListener('submit', (event) => {
      // Previene que el formulario recargue la página
      event.preventDefault();

      // Captura los valores de los campos del formulario
      const imagen = formulario.imagen.value;
      const categoria = formulario.categoria.value;
      const nombreProducto = formulario.nombreProducto.value;
      const precioProducto = formulario.precioProducto.value;
      const descripcion = formulario.descripcion.value;

      // Crea un nuevo elemento div y agrega las clases y atributos necesarios
      const nuevoProducto = document.createElement('div');
      nuevoProducto.classList.add('star-wars__tarjeta');
      nuevoProducto.innerHTML = `
        <div class="star-wars__composicion">
          <img class="star-wars__imagen" src="${imagen}" alt="${nombreProducto}">
          <img class="star-wars__borrar" src="assets/img/borrar.png" alt="Borrar">
          <img class="star-wars__editar" src="assets/img/editar.png" alt="Editar">
        </div>
        <p class="star-wars__descripcion">${nombreProducto}</p>
        <p class="star-wars__precio">$ ${precioProducto}</p>
        <p class="star-wars__codigo">#111111</p>
      `;

      // Agrega el nuevo producto al contenedor
      const contenedor = document.querySelector('#contenedor');
      contenedor.appendChild(nuevoProducto);

      // Limpia los campos del formulario
      formulario.reset();
    });  
});