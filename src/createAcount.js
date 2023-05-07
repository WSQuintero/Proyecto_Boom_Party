const nombre = document.querySelector('#nombre')
const usuario = document.querySelector('#usuario')
const password = document.querySelector('#password')
const repeat = document.querySelector('#repeat')
const button = document.querySelector('button')
const baseUsuarios = JSON.parse(localStorage.getItem('baseUsuarios')) || []
const spanError = document.querySelector('.error')
const inputs = document.querySelectorAll('input')

class Usuario {
  constructor ({ name, user, pass }) {
    this.name = name
    this.user = user
    this.pass = pass
  }

  static createNewUser () {
    const newUser = new Usuario({
      name: nombre.value,
      user: usuario.value,
      pass: String(password.value)
    })

    return newUser
  }

  static addUserInLocalStorage () {
    const usersInLocalStorage = JSON.stringify(baseUsuarios)
    localStorage.setItem('baseUsuarios', usersInLocalStorage)
    alert('Usuario agregado exitosamente')
  }

  static addBorderError (inputs) {
    inputs.forEach((input) => {
      input.style.border = '1px solid red'
    })
  }

  static addNewUser (event) {
    if (Array.from(inputs).every((input) => input.value !== '')) {
      if (password.value === repeat.value) {
        if (baseUsuarios.length === 0) {
          event.preventDefault()
          baseUsuarios.push(Usuario.createNewUser())
          Usuario.addUserInLocalStorage()
          window.location.replace('../index.html')
        } else {
          const userView = baseUsuarios.find(
            (user) => user.user === usuario.value
          )
          if (userView !== undefined) {
            event.preventDefault()
            spanError.innerText = 'El usuario ya se encuentra registrado'
            Usuario.addBorderError([usuario])
          } else {
            event.preventDefault()
            baseUsuarios.push(Usuario.createNewUser())
            Usuario.addUserInLocalStorage()
            window.location.replace('../index.html')
          }
        }
      } else {
        event.preventDefault()
        spanError.innerText = 'Las contraseñas deben coincidir'
        Usuario.addBorderError([password, repeat])
      }
    } else {
      event.preventDefault()
      spanError.innerText = 'Todos los campos deben estar diligenciados'
      Usuario.addBorderError([usuario, nombre, password, repeat])
    }
  }
}

button.addEventListener('click', Usuario.addNewUser)
