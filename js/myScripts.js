// Variables y constantes de apoyo
let vacio
//Funcion que verifica el campo del nombre.
/**
 * @param {string} nameInfo 
 * @returns boolean
 */
function comprobarNombre(nameInfo) {
    let namePattern = /^[A-Za-záéíóúñÁÉÍÓÚÑ]{2,}([\s][A-Za-záéíóúñÁÉÍÓÚÑ]{2,})+$/;
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
}

//Usa la funcion quitarConFocus() a traves del campo del email.
function QCFEmail() {
    document.getElementById("subBoton").removeAttribute("disabled", "")
}

//Usa la funcion quitarConFocus() a traves del campo del codigo.
function QCFNumero() {
    document.getElementById("subBoton").removeAttribute("disabled", "")
}


//Funcion que ""envia" los datos.
function enviarDatosForm() {
    if (comprobarNombre(document.getElementById("nombreAlumno").value) && comprobarEmail(document.getElementById("emailAlumno").value) && comprobarNumero(document.getElementById("numContacto").value)) {
        /*document.getElementById("subtituloHeader").style.display = "none"; //Quita el subtitulo.
        document.getElementById("tituloHeader").style.display = "none"; //Quita el titulo.
        document.getElementById("servicioForm").style.display = "none"; //Quita el formulario.
        document.getElementById("respuestasForm").style.display = "block"; //Muestra el informe de las respuestas.*/
        //Si hay valor de alergenos y no hay valor de info extra

    }  else {
        document.getElementById("subBoton").setAttribute("disabled", "")
    }
}
