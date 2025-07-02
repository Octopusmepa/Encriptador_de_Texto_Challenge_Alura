function encriptar(){
   
    var frase = document.getElementById("textoencriptado").value.toLocaleLowerCase();

//i = es para que tome letras mayusculas y minusculas
//g = tome en cuenta toda la linea u oración
//m= tome en cuenta multiples lineas

    var textoencriptado = frase.replace(/e/img, "enter");
    var textoencriptado = textoencriptado.replace(/o/img, "ober");
    var textoencriptado = textoencriptado.replace(/i/img, "imes");
    var textoencriptado = textoencriptado.replace(/a/img, "ai");
    var textoencriptado = textoencriptado.replace(/u/img, "ufat");

    document.getElementById("textodesencriptado").innerHTML = textoencriptado;

}

function desencriptar(){
   
    var frase = document.getElementById("textodesencriptado").value.toLocaleLowerCase();

//i = es para que tome letras mayusculas y minusculas
//g = tome en cuenta toda la linea u oración
//m= tome en cuenta multiples lineas

    var textoencriptado = frase.replace(/enter/img, "e");
    var textoencriptado = textoencriptado.replace(/ober/img, "o");
    var textoencriptado = textoencriptado.replace(/imes/img, "i");
    var textoencriptado = textoencriptado.replace(/ai/img, "a");
    var textoencriptado = textoencriptado.replace(/ufat/img, "u");

    document.getElementById("textodesencriptado").innerHTML = textoencriptado;

}

function copiar(){
    var contenido = document.querySelector("#textodesencriptado");
    contenido.select();
    document.execCommand("copy");
}