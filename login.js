const nombre=document.getElementById("input-nombre")
const contraseña=document.getElementById("input-cnt")

const nombreConf=document.getElementById("input-nombre-confi")
const contraseñaConf=document.getElementById("input-cnt-confi")

const enviarConf=document.getElementById("btn-enviar-confi")


// enviarConf.addEventListener("click", confirmacion)

// function confirmacion(){
//     if(nombre==nombreConf && contraseñaConf==contraseña){
//         alert("usuario verificado")
        
//     }
// }
function login(){
    var user, pass;

    if (user==nombreConf && pass==contraseñaConf){
        window.location="PreEntrega1_Orantes.html";
    }

}
