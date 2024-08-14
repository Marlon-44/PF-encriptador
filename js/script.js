const input = document.getElementById('input');
const output = document.getElementById("output");

function actionEncrypt(){
    
    const outputString = encrypt(input.value);
    output.value = outputString;
    document.getElementById("input").value = "";
}

function actionDecrypt(){
    
    const inputString = decrypt(input.value);
    output.value = inputString;
    document.getElementById("input").value = "";
}
function encrypt(inputString){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    inputString = inputString.toLowerCase();

    for(let i=0; i<matriz.length; i++){
        if(inputString.includes(matriz[i][0])){
            inputString = inputString.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return inputString;

}
function decrypt(outputString){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    outputString = outputString.toLowerCase();

    for(let i=0; i<matriz.length; i++){
        if(outputString.includes(matriz[i][1])){
            outputString = outputString.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return outputString;
}

function copy(){
    // Obtener el input de texto
    const output = document.getElementById('output');
    
    // Copiar el texto al portapapeles utilizando la API del portapapeles
    navigator.clipboard.writeText(output.value)
    .then(() => {
        // Informar al usuario que el texto ha sido copiado
        alert('Texto copiado: ' + output.value);
    })
    .catch(err => {
        // Manejar cualquier error
        console.error('Error al copiar el texto: ', err);
    });
  
}
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('input');
    const section = document.getElementById('input-section');
    const btnEncrypt = document.getElementById('btn-encrypt');
    const btnDecrypt = document.getElementById('btn-decrypt');
    const info = document.getElementById('info');

    function validateInput() {
        const value = textarea.value;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasSpecialChars = /[^a-z0-9\s]/.test(value);
        if ( value.trim() === '') {
            btnEncrypt.disabled = true;
            btnDecrypt.disabled = true;
            section.classList.remove('error');
        } else{
            if (hasUpperCase || hasSpecialChars ) {
            
            section.classList.add('error');
            btnEncrypt.disabled = true;
            btnDecrypt.disabled = true;
            info.classList.add('destacar');
            } else {
                
                section.classList.remove('error');
                btnEncrypt.disabled = false;
                btnDecrypt.disabled = false;
                info.classList.remove('destacar');
            }
        }

        

    }

    textarea.addEventListener('input', validateInput);
});
