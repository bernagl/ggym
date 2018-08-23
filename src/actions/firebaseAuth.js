import { auth, db } from './firebase-config'

export const login = async ({ email, password }) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password)
    return db
      .ref(`admin/${user.uid}`)
      .once('value')
      .then(result => {
        const usuario = result.val()
        return usuario
          ? returnObject(202, 'Bienvenido')
          : returnObject(404, 'Error al iniciar sesión')
      })
  } catch (e) {
    return returnObject(404, 'Error al iniciar sesión')
  }
}

export const register = async (correo, contrasena, nombre) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(
      correo,
      contrasena
    )
    return db
      .ref(`admin/${user.uid}`)
      .set({ correo, nombre, admin: true })
      .then(result => 202)
  } catch (e) {
    return 500
  }
}

export const authState = async context => {
  auth.onAuthStateChanged(user => {
    if (user) {
      return db
        .ref(`admin/${user.uid}`)
        .once('value')
        .then(result => {
          const usuario = result.val()
          if (usuario) {
            context.setState({
              auth: { correo: user.email, uid: user.uid },
              loading: false
            })
          } else {
            logout()
            return 404
          }
        })
    } else {
      context.setState({ auth: null, loading: false })
    }
  })
}

export const logout = () => {
  auth
    .signOut()
    .then(() => console.log('logout'))
    .catch(e => console.log(e))
}

export const recover = correo => {
  return auth
    .sendPasswordResetEmail(correo)
    .then(r => r)
    .catch(e => e)
}

function returnObject(status, message, descripcion) {
  return { status, message, descripcion }
}
