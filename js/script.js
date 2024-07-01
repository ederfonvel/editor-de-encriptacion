
function encriptarTexto() {
    
    const textoOriginal = document.getElementById('texto__encriptar').value.toLowerCase().trim();
    const encriptado = textoOriginal.replace(/e/g, 'enter')
                                    .replace(/i/g, 'imes')
                                    .replace(/a/g, 'ai')
                                    .replace(/o/g, 'ober')
                                    .replace(/u/g, 'ufat');
    mostrarResultado(encriptado);
}

function desencriptarTexto() {
    const textoEncriptado = document.getElementById('texto__encriptar').value.toLowerCase().trim();
    const encriptado = textoEncriptado.replace(/enter/g, 'e')
                                        .replace(/imes/g, 'i')
                                        .replace(/ai/g, 'a')
                                        .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');
    
    mostrarResultado(encriptado);
}
function mostrarResultado(encriptado) {
    const resultadoTextarea = document.getElementById('texto__encriptado');
    resultadoTextarea.value = encriptado;

    const botonCopiar = document.getElementById('botonCopiar');
    botonCopiar.style.display = 'block';
}

function copiarResultado() {
    const resultado = document.getElementById('texto__encriptado');
    resultado.select();
    resultado.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
    alert('¡Texto copiado!');
}
