const usuariosAlmacenados = [
  { user: "santiago", pass: 1234 },
  { user: "santiago2", pass: 12345 },
];
const error = document.querySelector(".error");
  let usuarioEncontrado = false;
  let contrasenaIncorrecta = false;
  let usuarioNoRegistrado = true;
  let mensajeError;

button.addEventListener("click", (e) => {
  e.preventDefault();
  const usuario = {
    user: username.value,
    pass: password.value,
  };


  // const usuariosAlmacenados = JSON.parse(localStorage.getItem("baseUsuarios"));

  /* Se recorre el array y se define cuales datos se encuentran y cuales no */
  // for (let i = 0; i < usuariosAlmacenados.length; i++) {
  //   const usuarioActual = usuariosAlmacenados[i];
  //   if (usuario.user === usuarioActual.user) {
  //     usuarioNoRegistrado = false;
  //     if (usuario.pass === usuarioActual.pass) {
  //       usuarioEncontrado = true;
  //       break;
  //     } else {
  //       contrasenaIncorrecta = true;
  //     }
  //   }
  // }

  const usario = usuariosAlmacenados.find((user) => {
    console.log(typeof usuario.pass);
    if (user.user === usuario.user) {
      if(user.pass === Number(usuario.pass)){
        return user;
      }else{
        contrasenaIncorrecta = true;
      }
      
    }
  });
  console.log(usario);

  if (usario !== undefined) {
    usuarioEncontrado = true;
    alert("Entraste al login")
  } else if (contrasenaIncorrecta) {
    error.innerText = "Contraseña incorrecta";
  } else {
    error.innerText = "Usuario no encontrado";
  }

  /* condiciones para iniciar sesion */
  // switch (true) {
  //   case usuarioEncontrado:
  //     console.log("usario");
  //     //  window.location.replace("Pagina Principal.html");
  //     break;
  //   case contrasenaIncorrecta:
  //     mensajeError = "Contraseña incorrecta";
  //     break;
  //   case usuarioNoRegistrado:
  //     mensajeError = "Usuario no registrado";
  //     break;
  // }

  // /* Mensaje cuando los datos no son correctos */
  // if (mensajeError) {
  //   const errorMensaje = document.createElement("p");
  //   errorMensaje.innerText = mensajeError;
  //   const mensajesError = document.querySelectorAll(".mensaje-error");
  //   if (mensajesError.length > 0) {
  //     mensajesError[0].remove();
  //   }
  //   document.querySelector("form").appendChild(errorMensaje);
  //   errorMensaje.classList.add("mensaje-error");
  // }
});
