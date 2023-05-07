let mensajeError = ''
const usuariosAlmacenados = JSON.parse(localStorage.getItem('baseUsuarios')) || []
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('#button')

button.addEventListener('click', findUser)

function findUser (e) {
  e.preventDefault()
  const usuario = {
    user: username.value,
    pass: password.value
  }

  const usuarioEncontrado = usuariosAlmacenados.find(
    (usuarioActual) => usuario.user === usuarioActual.user
  )

  validateUser(usuarioEncontrado, usuario)
  showError(mensajeError)
}

function validateUser (usuarioEncontrado, usuario) {
  if (usuarioEncontrado) {
    if (usuario.pass === usuarioEncontrado.pass) {
      window.location.replace('../pages/paginaPrincipal.html')
    } else {
      mensajeError = 'Contraseña incorrecta'
    }
  } else {
    mensajeError = 'Usuario no registrado'
  }
}

function showError (mensajeError) {
  if (mensajeError) {
    const errorMensaje = document.createElement('span')
    errorMensaje.textContent = mensajeError
    errorMensaje.classList.add('mensaje-error')
    errorMensaje.classList.add('error')

    const mensajesError = document.querySelectorAll('.mensaje-error')
    if (mensajesError.length > 0) {
      mensajesError[0].remove()
    }
    document.querySelector('form').appendChild(errorMensaje)
  }
}
