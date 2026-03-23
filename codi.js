window.onload = function () {
  const numeros = document.getElementsByClassName("numero");
  const display = document.getElementById("display");
  let acumular = 0;
  let viene_de_op = false;
  let ultima_operacion = " ";

  for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", displayNumeros);
  }

  document.getElementById("suma").addEventListener("click", sumar);
  document.getElementById("resta").addEventListener("click", restar);
  document.getElementById("multiplica").addEventListener("click", multiplicar);
  document.getElementById("divideix").addEventListener("click", dividir);
  document.getElementById("divideix").addEventListener("click", dividir);
  document.getElementById("cuadr").addEventListener("click", cuadrado);
  document.getElementById("raiz").addEventListener("click", raiz);
  document.getElementById("numC").addEventListener("click", borrar);
  document.getElementById("coma").addEventListener("click", coma);
  document.getElementById("igual").addEventListener("click", igual);
  document.addEventListener("keydown", keyboard);
 

  function displayNumeros() {
    if (viene_de_op) {
      display.value = this.value;
      viene_de_op = false;
    } else {
      display.value += this.value;
    }
  }

  function keyboard(tecla) {
    console.log(tecla);
    if (tecla.key >= "0" && tecla.key <= "9") {
      if (viene_de_op) {
        display.value = tecla.key;
        viene_de_op = false;
      } else {
        display.value += tecla.key;
      }
    } else if (tecla.key === "+") {
      sumar();
    } else if (tecla.key === "-") {
      restar();
    } else if (tecla.key === "*") {
      multiplicar();
    } else if (tecla.key === "/") {
      dividir();
    } else if (tecla.code === "Comma" || tecla.code === "NumpadDecimal") {
      coma();
    } else if (
      (tecla.key === "Dead" && tecla.code === "BracketLeft") ||
      tecla.key === "^"
    ) {
      cuadrado();
    } else if (tecla.key === "Enter" || tecla.key === "=") {
      igual();
    } else if (tecla.key === "Backspace") {
      borrar();
    }
  }
  //Cuando el usuario pulsa un operador sin haber introducido ningún número antes.
  function solo_operacion() { 
    if (display.value === "" || display.value === " ") {
      display.value = acumular;
      viene_de_op = false;
    }
  }

  function coma() {
    if (display.value == "" || viene_de_op) {
      display.value = "0.";
      viene_de_op = false;
    } else if (!display.value.includes(".")) {
      display.value += ".";
    }
  }

  function operadores() {
    if (viene_de_op) return;
    switch (ultima_operacion) {
      case "+":
        acumular += parseFloat(display.value);
        break;
      case "-":
        acumular -= parseFloat(display.value);
        break;
      case "*":
        acumular *= parseFloat(display.value);
        break;
      case "/":
        acumular /= parseFloat(display.value);
        break;
      default:
        acumular = parseFloat(display.value);
    }
  }

  function sumar() {
    solo_operacion();
    operadores();
    display.value = acumular;
    viene_de_op = true;
    ultima_operacion = "+";
  }

  function restar() {
    solo_operacion();
    operadores();
    display.value = acumular;
    viene_de_op = true;
    ultima_operacion = "-";
  }

  function multiplicar() {
    solo_operacion();
    operadores();
    display.value = acumular;
    viene_de_op = true;
    ultima_operacion = "*";
  }
  function dividir() {
    solo_operacion();
    operadores();
    display.value = acumular;
    viene_de_op = true;
    ultima_operacion = "/";
  }

  function cuadrado() {
    if (display.value.length === 0) {
      return;
    }
    let aux = Math.pow(parseFloat(display.value), 2);
    display.value = aux;
  }
  function raiz() {
    if (display.value.length === 0) {
      return;
    }
    let aux = Math.sqrt(parseFloat(display.value));
    display.value = aux;
  }
  function borrar() {
    acumular = 0;
    display.value = "";
    ultima_operacion = " ";
  }

  function igual() {
    switch (ultima_operacion) {
      case "+":
        acumular += parseFloat(display.value);
        break;
      case "-":
        acumular -= parseFloat(display.value);
        break;
      case "*":
        acumular *= parseFloat(display.value);
        break;
      case "/":
        acumular /= parseFloat(display.value);
        break;
      default:
        break;
    }

    display.value = acumular;
    ultima_operacion = " ";
    viene_de_op = true;
  }
};
