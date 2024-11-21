function calcularVolumen() {
    const radio = parseFloat(document.getElementById("radio").value);
    
    if (isNaN(radio) || radio <= 0) {
        document.getElementById("resultado").innerText = "Por favor ingresa un valor válido para el radio.";
        return;
    }
    
    // Fórmula para calcular el volumen del tricilindro
    const volumen = 8 * (2 - (3 * Math.sqrt(2) / 4)) * Math.pow(radio, 3);
    document.getElementById("resultado").innerText = `El volumen del tricilindro con radio r=${radio} es: ${volumen.toFixed(2)} unidades cúbicas.`;
    
    // Llamar a la función para mostrar la gráfica
    mostrarGrafica(radio);
}

function mostrarGrafica(radio) {
    const grafica = document.getElementById("grafica");
    grafica.innerHTML = ''; // Limpiar gráfico anterior
    grafica.style.border = "2px solid #333";
    grafica.style.backgroundColor = "#ffffff"; // Fondo blanco para la gráfica

    // Crear un gráfico visual que represente el radio
    const barra = document.createElement('div');
    barra.style.width = `${radio * 10}px`; // Escala visual del tamaño de la barra según el radio
    barra.style.height = '30px';
    barra.style.backgroundColor = "#0077ff";
    barra.style.margin = "20px auto";
    barra.style.borderRadius = "5px";

    // Agregar el valor del radio en el centro de la barra
    const texto = document.createElement('span');
    texto.innerText = `Radio: ${radio}`;
    texto.style.position = 'absolute';
    texto.style.left = '50%';
    texto.style.top = '50%';
    texto.style.transform = 'translate(-50%, -50%)';
    texto.style.fontWeight = 'bold';
    texto.style.color = "#fff";

    // Agregar la barra y el texto al gráfico
    grafica.appendChild(barra);
    barra.appendChild(texto);
}
