function calcularIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
  
    if (altura === "" || peso === "") {
      alert("Por favor, ingresa todos los valores.");
      return;
    }
  
    var imc = peso / ((altura / 100) ** 2);
    var mensaje = "";
  
    if (imc < 18.5) {
      mensaje = "Bajo peso";
    } else if (imc < 25) {
      mensaje = "Peso normal";
    } else if (imc < 30) {
      mensaje = "Sobrepeso";
    } else {
      mensaje = "Obesidad";
    }
  
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = mensaje + " " + getEmoji(mensaje);
  
    // Mensaje en voz
    speak(mensaje);
  }
  
  function getEmoji(mensaje) {
    var emojis = {
      "Bajo peso": "👎",
      "Peso normal": "👍",
      "Sobrepeso": "⚠️",
      "Obesidad": "⚠️"
    };
  
    return emojis[mensaje];
  }
  
  function speak(texto) {
    var mensajeVoz = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(mensajeVoz);
  }
  