// Variables y constantes de apoyo
let vacio
//Funcion que verifica el campo del nombre.
/**
 * @param {string} nameInfo 
 * @returns boolean
 */
function comprobarNombre(nameInfo) {
    let namePattern = /^[A-Za-záéíóúñÁÉÍÓÚÑ]{2,}([\s]*[A-Za-záéíóúñÁÉÍÓÚÑ]{2,})+$/;
    if (nameInfo === "") {
        return vacio
    } else {
        console.log(namePattern.test(nameInfo))
        return namePattern.test(nameInfo)
    }
}

//Funcion que verifica el campo del email.
/**
 * @param {string} emailInfo 
 * @returns boolean
 */
function comprobarEmail(emailInfo) {
    let emailPattern = /[a-zA-ZñÑ0-9_]+([.][a-zA-ZñÑ0-9_]+)*@[a-zA-ZñÑ0-9_]+([.][a-zA-ZñÑ0-9_]+)*[.][a-zA-ZñÑ0]{2,5}$/;
    if (emailInfo === "") {
        return vacio
    } else {
        console.log(emailPattern.test(emailInfo))
        return emailPattern.test(emailInfo)
    }
}

//Funcion que verifica el campo del numero de contacto.
/**
 * @param {string} numeroInfo 
 * @returns boolean
 */
function comprobarNumero(numeroInfo) {
    let numeroPattern = /[0-9]{9}$/;
    if (numeroInfo === "") {
        return vacio
    } else {
        console.log(numeroPattern.test(numeroInfo))
        return numeroPattern.test(numeroInfo)
    }
}



//funcion que añade el atributo onfocus a los input para
//quitar la desactivacion del boton.
function quitarConFocus() {
    document.getElementById("nombreAlumno").setAttribute("onfocus", "QCFNombre()");
    document.getElementById("emailAlumno").setAttribute("onfocus", "QCFEmail()");
    document.getElementById("numContacto").setAttribute("onfocus", "QCFNumero()");
}

//Activa la funcion escrita
quitarConFocus()

//Usa la funcion quitarConFocus() a traves del campo del nombre.
function QCFNombre() {
    document.getElementById("subBoton").removeAttribute("disabled", "")
    document.getElementById("nombreAlumno").style.border = "none";
    document.getElementById("emailAlumno").style.border = "none";
    document.getElementById("numContacto").style.border = "none";

}

//Usa la funcion quitarConFocus() a traves del campo del email.
function QCFEmail() {
    document.getElementById("subBoton").removeAttribute("disabled", "")
    document.getElementById("nombreAlumno").style.border = "none";
    document.getElementById("emailAlumno").style.border = "none";
    document.getElementById("numContacto").style.border = "none";

}

//Usa la funcion quitarConFocus() a traves del campo del codigo.
function QCFNumero() {
    document.getElementById("subBoton").removeAttribute("disabled", "")
    document.getElementById("nombreAlumno").style.border = "none";
    document.getElementById("emailAlumno").style.border = "none";
    document.getElementById("numContacto").style.border = "none";
}


//Funcion que ""envia" los datos.
function enviarDatosForm() {
    if (comprobarNombre(document.getElementById("nombreAlumno").value) && comprobarEmail(document.getElementById("emailAlumno").value) && comprobarNumero(document.getElementById("numContacto").value)) {
        let nombreA = document.getElementById("nombreAlumno").value;
        let apellidosA = document.getElementById("apellidosAlumno").value;
        document.getElementById("subBoton").setAttribute("disabled", "")
        document.getElementById("servicioForm").style.display = "none"; //Quita el informe.*/
        document.getElementById("respuestasForm").style.display = "block"; //Muestra el informe de las respuestas.*/
        document.getElementById("mensajeRespuesta").innerHTML = "Gracias por su colaboracion, " + nombreA + " " + apellidosA ; //Mensaje

    }  else {
        document.getElementById("subBoton").setAttribute("disabled", "")
        document.getElementById("nombreAlumno").style.border = "red solid 2px"; //Error en la validacion.*/
        document.getElementById("emailAlumno").style.border = "red solid 2px"; //Error en la validacion.*/
        document.getElementById("numContacto").style.border = "red solid 2px"; //Error en la validacion.*/
    }
}
