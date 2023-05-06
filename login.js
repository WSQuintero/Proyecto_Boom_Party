button.addEventListener("click", (e) => {
  e.preventDefault();
  const usuario = {
    user: username.value,
    pass: password.value,
  };

  const usuariosAlmacenados = JSON.parse(localStorage.getItem("baseUsuarios"));

  /* Un find para encontrar al usuario, donde se convierte en true si lo encuentra y undefined si no */
  const usuarioEncontrado = usuariosAlmacenados.find(
    (usuarioActual) => usuario.user === usuarioActual.user
  );

  /* Error que puede aparecer:
      -si el usuario se encuentra registrado devolvera false */
  let usuarioNoRegistrado = true;

  /* Mensaje que se mostrara cuando haya errores */
  let mensajeError = "";

  /* Si usuario encontrado es true entra al if. En caso contrario colocara el mensaje de usuario no registrado en mensajeError 
     cuando se entra al if:
       -se convierte en usuario registrado, dando false al error de usuarioNoRegistrado
       -se revisa la contraseña y si concuerda, entra a la pagina principal. En caso contrario colocara el mensaje de contraseña incorrecta en mensajeError */
  if (usuarioEncontrado) {
    usuarioNoRegistrado = false;
    if (usuario.pass === usuarioEncontrado.pass) {
      window.location.replace("Pagina Principal.html");
    } else {
      mensajeError = "Contraseña incorrecta";
    }
  } else {
    mensajeError = "Usuario no registrado";
  }

  /* Colocar mensaje de error debajo del formulario:
      -El mensajeError fue definido en el if anterior, asi que entra a este if
      -se crea elemento <p> en errorMensaje para mostrar el mensaje despues
      -se guarda el mensaje del error con .textcontent para el <p>
      -se crea la clase ".mensaje-error" 
          (querySelectorAll devuelve una lista de todos los elementos en la página que tienen la clase "mensaje-error" 
          Si hay más de un elemento con esta clase, entonces mensajesError contendrá más de un elemento, 
          y se puede acceder a cada elemento usando un índice (por ejemplo, mensajesError[0]), el array nos sirve para el siguiente paso
      -si el mensaje que se encuentra en el array es mayor que 0, se elimina el mensaje. 
          Esto con el fin de que no se acumulen los mensajes en la pagina y se muestre solo un mensaje
      -se selecciona el form con querySelector y con .appendChild() agrega el elemento <p> debajo del form
      -el elemento <p> ya creado en el html se le agrega la clase "mensaje-error" para que sea leida por el querySelectorAll y funcione bien el if del array
      - */
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
