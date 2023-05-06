const usuariosAlmacenados = [
  { user: "santiago", pass: 1234 },
  { user: "santiago2", pass: 12345 },
];

// const usuariosAlmacenados = JSON.parse(localStorage.getItem("baseUsuarios"));
const error = document.querySelector(".error");


button.addEventListener("click", (e) => {
  e.preventDefault();
  let usuario = username.value;
  let pass = password.value;
  let contrasenaIncorrecta = false;

  /* el método find lo puedes utilizar para encontrar un 
  elemento en especifico en un array dependiendo de la condición que utilices-
  
  Recibe otra función donde especificas las condiciones que debe tener el elemento a devolver*/

  const userTrue = usuariosAlmacenados.find((user) => {
    if (user.user === usuario) {
      if (user.pass === Number(pass)) {
        return user;
      } else {
        contrasenaIncorrecta = true;
      }
    }
  });

  if (userTrue !== undefined) {
    window.location.href ="paginaPrincipal.html"
  } else if (contrasenaIncorrecta) {
    error.innerText = "Contraseña incorrecta";
  } else {
    error.innerText = "Usuario no encontrado";
  }
});
