button.addEventListener("click", (e) => {
  e.preventDefault();
  const usuario = {
    user: username.value,
    pass: password.value,
  };

  const usuariosAlmacenados = JSON.parse(localStorage.getItem("baseUsuarios"));
  
  let usuarioEncontrado = false;
  let contrasenaIncorrecta = false;
  let usuarioNoRegistrado = true;

  /* Se recorre el array y se define cuales datos se encuentran y cuales no */
  for (let i = 0; i < usuariosAlmacenados.length; i++) {
    const usuarioActual = usuariosAlmacenados[i];
    if (usuario.user === usuarioActual.user) {
      usuarioNoRegistrado = false;
      if (usuario.pass === usuarioActual.pass) {
        usuarioEncontrado = true;
        break;
      } else {
        contrasenaIncorrecta = true;
      }
    }
  }

  /* condiciones para iniciar sesion */
  switch (true) {
    case usuarioEncontrado:
      window.location.replace("Pagina Principal.html");
      break;
    case contrasenaIncorrecta:
      var mensajeError = "Contraseña incorrecta";
      break;
    case usuarioNoRegistrado:
      var mensajeError = "Usuario no registrado";
      break;
  }

  /* Mensaje cuando los datos no son correctos */
  if (mensajeError) {
    const errorMensaje = document.createElement("p");
    errorMensaje.textContent = mensajeError;
    const mensajesError = document.querySelectorAll(".mensaje-error");
    if (mensajesError.length > 0) {
      mensajesError[0].remove();
    }
    document.querySelector("form").appendChild(errorMensaje);
    errorMensaje.classList.add("mensaje-error");
  }
});
