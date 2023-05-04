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

  // Aquí se crea un método estático para poder crear usuario

  static createNewUser () {
    const newUser = new Usuario({
      name: nombre.value,
      user: usuario.value,
      pass: password.value
    })

    return newUser
  }

  // Aquí se crea un método estático para poder agregar usuario

  static addNewUser (event) {
    if (Array.from(inputs).every((input) => input.value !== '')) {
      if (password.value === repeat.value) {
        if (baseUsuarios.length === 0) {
          baseUsuarios.push(Usuario.createNewUser())
          const usersInLocalStorage = JSON.stringify(baseUsuarios)
          localStorage.setItem('baseUsuarios', usersInLocalStorage)
          alert('Usuario agregado exitosamente')
        } else {
          const userView = baseUsuarios.find(
            (user) => user.user === usuario.value
          )
          if (userView !== undefined) {
            event.preventDefault()
            spanError.innerText = 'El usuario ya se encuentra registrado'
            usuario.style.border = '1px solid red'
          } else {
            baseUsuarios.push(Usuario.createNewUser())
            const usersInLocalStorage = JSON.stringify(baseUsuarios)
            localStorage.setItem('baseUsuarios', usersInLocalStorage)
            alert('Usuario agregado exitosamente')
          }
        }
      } else {
        event.preventDefault()
        spanError.innerText = 'Las contraseñas deben coincidir'
        password.style.border = '1px solid red'
        repeat.style.border = '1px solid red'
      }
    } else {
      event.preventDefault()
      spanError.innerText = 'Todos los campos deben estar diligenciados'
      usuario.style.border = '1px solid red'
      nombre.style.border = '1px solid red'
      password.style.border = '1px solid red'
      repeat.style.border = '1px solid red'
    }
  }
}

button.addEventListener('click', Usuario.addNewUser)
