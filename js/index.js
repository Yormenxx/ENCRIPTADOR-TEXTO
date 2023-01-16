

const $btnEncriptar = document.getElementById("Encryp")

const $btnDesencriptar = document.getElementById("Desencryp")

const $copy = document.getElementById("copy")

const $boxInfo = document.querySelector(".text-information")


$btnEncriptar.addEventListener("click",()=>{

    let txtEncriptar = document.getElementById("texto-encryp").value.replace(/a/img,"ai")
    .replace(/e/img,"enter")
    .replace(/i/img,"imes")
    .replace(/o/img,"ober")
    .replace(/u/img,"ufat");

    if(/[^a-z ]/.test(txtEncriptar) && /^[a-zA-Z\u00C0-\u017F]+$/.test(txtEncriptar)) {

        return alert("No se permiten letras mayusculas ni acentos")

    }else if ((txtEncriptar.length === 0 || /^\s+$/.test(txtEncriptar))){

        return alert("No has ingresado ningun texto")

    }


    document.getElementById("mostrar-texto").innerHTML= txtEncriptar;

    // $boxInfo.classList.add("disabled")

   
})


$btnDesencriptar.addEventListener("click",()=>{

    let txtDesc = document.getElementById("texto-encryp").value.replace(/ai/img,"a")
    .replace(/enter/img,"e")
    .replace(/imes/img,"i")
    .replace(/ober/img,"o")
    .replace(/ufat/img,"u");

    if (/[^a-z ]/.test(txtDesc) && /^[a-zA-Z\u00C0-\u017F]+$/.test(txtDesc)) {

        return alert("No se permiten letras mayusculas ni acentos")

    }else if ((txtDesc.length === 0 || /^\s+$/.test(txtDesc))){

        return alert("No has ingresado ningun texto")

    }

    document.getElementById("mostrar-texto").innerHTML=txtDesc;
    
    

})


$copy.addEventListener("click",()=>{
    const text = copiar()
    $copy.value=text
})

function copiar(){
    let $copy = document.getElementById("mostrar-texto");
    $copy.select();
    document.execCommand("copy")
}








