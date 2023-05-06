let mensajeError = "";
let usuarioNoRegistrado = true;
// const usuariosAlmacenados = JSON.parse(localStorage.getItem("baseUsuarios"));
const usuariosAlmacenados=[{
  user:usuario.user,
  pass:usuario.pass
}]

const usuario = {
  user: username.value,
  pass: password.value,
};

button.addEventListener("click", (e) => {
  e.preventDefault();

  const usuarioEncontrado = usuariosAlmacenados.find(
    (usuarioActual) => usuario.user === usuarioActual.user
  );

  validateUser(usuarioEncontrado);
  showError(mensajeError);
});

function validateUser(usuarioEncontrado) {
  if (usuarioEncontrado) {
    usuarioNoRegistrado = false;
    if (Number(usuario.pass) === usuarioEncontrado.pass) {
      window.location.replace("Pagina Principal.html");
    } else {
      mensajeError = "Contraseña incorrecta";
    }
  } else {
    mensajeError = "Usuario no registrado";
  }
}

function showError(mensajeError) {
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
}
