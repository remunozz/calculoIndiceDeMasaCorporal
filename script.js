// Función para calcular índice de masa corporal
function calcularIMC() {
  var altura = document.getElementById("altura").value; // Obtiene el valor de la altura ingresada por el usuario
  var peso = document.getElementById("peso").value; // Obtiene el valor del peso ingresado por el usuario

  if (altura === "" || peso === "") { // Verifica si alguno de los campos está vacío
    alert("Por favor, ingresa todos los valores."); // Muestra una alerta al usuario para ingresar todos los valores
    return; // Sale de la función si falta algún valor
  }

  var imc = peso / ((altura / 100) ** 2); // Calcula el IMC utilizando la fórmula IMC = peso / (altura^2) (la altura se divide por 100 para convertirla de cm a m)
  var mensaje = ""; // Variable para almacenar el mensaje correspondiente a la categoría de IMC

  if (imc < 18.5) { // Compara el valor del IMC para determinar la categoría
    mensaje = "Bajo peso"; // Si el IMC es menor a 18.5, se considera bajo peso
  } else if (imc < 25) {
    mensaje = "Peso normal"; // Si el IMC está entre 18.5 y 24.9, se considera peso normal
  } else if (imc < 30) {
    mensaje = "Sobrepeso"; // Si el IMC está entre 25 y 29.9, se considera sobrepeso
  } else {
    mensaje = "Obesidad"; // Si el IMC es mayor o igual a 30, se considera obesidad
  }

  var resultadoDiv = document.getElementById("resultado"); // Obtiene el elemento HTML con el ID "resultado" donde se mostrará el resultado
  resultadoDiv.innerHTML = mensaje + " " + getEmoji(mensaje); // Muestra el mensaje y el emoji correspondiente en el elemento HTML

  // Mensaje en voz
  speak(mensaje); // Llama a la función para reproducir el mensaje en voz
}

function getEmoji(mensaje) {
  var emojis = {
    "Bajo peso": "👎", // Emoji para la categoría "Bajo peso"
    "Peso normal": "👍", // Emoji para la categoría "Peso normal"
    "Sobrepeso": "⚠️", // Emoji para la categoría "Sobrepeso"
    "Obesidad": "⚠️" // Emoji para la categoría "Obesidad"
  };

  return emojis[mensaje]; // Devuelve el emoji correspondiente a la categoría de IMC
}

function speak(texto) {
  var mensajeVoz = new SpeechSynthesisUtterance(texto); // Crea un objeto para el mensaje de voz
  window.speechSynthesis.speak(mensajeVoz); // Reproduce el mensaje de voz utilizando la API del navegador
}
