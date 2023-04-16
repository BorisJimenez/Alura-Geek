function validarFormularioRodapie() {
    // Obtener los campos de entrada con atributos de datos
    let nombreRodapie = document.querySelector('[data-nombreR]');
    let mensajeRodapie = document.querySelector('[data-mensajeR]');

    // Verificar que los campos requeridos estén completos
    if (!nombreRodapie.value || !mensajeRodapie.value) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    // Si todo está bien, permitir el envío del formulario
    return true;
}


