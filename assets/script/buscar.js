function buscar() {
    const textoBuscado = document.querySelector('[data-buscar]').value;
    const encontrado = window.find(textoBuscado);
    if (!encontrado) {
      alert("No se encontró el texto buscado.");
      console.log("no se encontro el texto buscado")
    }
  }