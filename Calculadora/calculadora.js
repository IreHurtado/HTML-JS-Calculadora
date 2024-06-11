console.log('Ejercicio Calculadora');

class Calculadora {
    #resultado;
    constructor() {
        this.#resultado = 0;
    }

    obtenerResultado() {
        return this.#resultado;
    }

    reiniciar() {
        this.#resultado = 0;
    }

    sumar(numero) {
        try {
            if (isNaN(numero)) {
                throw Error('No se ha introducido un número válido');
            } else {
                this.#resultado += numero;
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    restar(numero) {
        try {
            if (isNaN(numero)) {
                throw Error('No se ha introducido un número válido');
            } else {
                this.#resultado -= numero;
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    multiplicar(numero) {
        try {
            if (isNaN(numero)) {
                throw Error('No se ha introducido un número válido');
            } else {
                this.#resultado *= numero;
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    dividir(numero) {
        try {
            if (numero === 0) {
                throw Error('No se puede dividir por 0');
            } else {
                this.#resultado /= numero;
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}

let calc = new Calculadora();

function actualizarResultado() {
    document.getElementById('resultado').innerText = 'Resultado: ' + calc.obtenerResultado();
}

function sumar() {
    const numero = parseFloat(document.getElementById('numero').value);
    calc.sumar(numero);
    actualizarResultado();
}

function restar() {
    const numero = parseFloat(document.getElementById('numero').value);
    calc.restar(numero);
    actualizarResultado();
}

function multiplicar() {
    const numero = parseFloat(document.getElementById('numero').value);
    calc.multiplicar(numero);
    actualizarResultado();
}

function dividir() {
    const numero = parseFloat(document.getElementById('numero').value);
    calc.dividir(numero);
    actualizarResultado();
}

function reiniciar() {
    calc.reiniciar();
    actualizarResultado();
}