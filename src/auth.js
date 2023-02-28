import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider({children}) {
  // navigate para hacer navegación interna
  const navigate = useNavigate()

  // estado con user cambiante
  const [user, setUser] = React.useState(null);

  //crea funcion login, para crear usuario
  const login = ({username}) =>{
    setUser({username})

    //al ahcer login, voy a profile
    navigate('/profile')
  }

  //creo funcion logout , para cerrar usuario
  const logout = () =>{
    setUser(null)

    //al ahcer login, voy a home
    navigate('/')
  }

  const auth = {user, login, logout}
  return(
    <AuthContext.Provider
      value = {auth}
      
    > {children} </AuthContext.Provider>
  )
}

function useAuth() {
  const auth = useContext(AuthContext)

  return auth;
}

export {
  AuthProvider,
  useAuth
}

