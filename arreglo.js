let arrayOriginal = [];
let contador = 0;
function generarArrays() {
    let dato = document.querySelector('#dato').value;

    if (dato !== '') {
        if (arrayOriginal.length < 5) {
            arrayOriginal.push(dato);
            console.log(arrayOriginal)
            contador++;
            document.querySelector('#conteo').innerHTML = `${contador} dato agregado!!`;
        }

        if (arrayOriginal.length === 5) {
            document.querySelector('#original').innerHTML = `[ ${arrayOriginal} ]`
            document.querySelector('#invertido').innerHTML = `[${arrayOriginal.reverse()}]`;
        }
    }
}
