var boton = document.getElementById("enviado");
boton.addEventListener("click", enviarDatos);
function enviarDatos() {
    firebase.database().ref('contador/actual').once('value').then(function (snapshot) {
        var userId = (snapshot.val());
    });

    nombre = document.getElementById("name").value
    email = document.getElementById("name").value
    pais = document.getElementById("country").value
    mensaje = document.getElementById("message").value
    writeUserData(nombre, email, pais, mensaje)
}
console.log(firebase.database())
function writeUserData(name, email, pais) {
    firebase.database().ref('contador/usuarios').once('value').then(function (snapshot) {
        var userId = (snapshot.val());
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            pais: pais,
            mensaje: mensaje
        });
        firebase.database().ref('contador/').set({
            actual: userId+1
        });
    });
    console.log(document.getElementById("success").style)
    document.getElementById("success").style.display ='block';
}