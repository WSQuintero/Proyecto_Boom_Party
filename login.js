const usuariosAlmacenados = [
  { user: "santiago", pass: 1234 },
  { user: "santiago2", pass: 12345 },
];

// const usuariosAlmacenados = JSON.parse(localStorage.getItem("baseUsuarios"));

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

});
