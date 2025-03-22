const participantes = [];
const nombreInput = document.getElementById('nombre');
const agregarBtn = document.getElementById('agregar');
const sortearBtn = document.getElementById('sortear');
const resultadosDiv = document.getElementById('resultados');

agregarBtn.addEventListener('click', () => {
    const nombre = nombreInput.value;
    if (nombre) {
        participantes.push(nombre);
        nombreInput.value = '';
    }
});

sortearBtn.addEventListener('click', () => {
    // Lógica para el sorteo
    // Mostrar resultados en resultadosDiv
});