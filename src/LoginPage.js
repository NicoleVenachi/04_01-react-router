import React from 'react'
import { useAuth } from './auth';

function LoginPage() {
  // traigo hook de autenticacion
  const auth = useAuth();

  // uso estado para tomar el input
  const [username, setusername]= React.useState('')

  const login = (event) => {
    //evito que se recargue la pagina
    event.preventDefault();
    auth.login({username})
  }
  return (

    <>
        <h1> Login </h1>

        {/* Le pongo al for una funci'on para el evento onSubmit */}
        <form onSubmit={login}> 
            <label> Escribe tu nombre de usuario: </label>
            
            <input
                value={username}
                onChange = { (event) => setusername(event.target.value)}
            />

            {/* //btn para envar data */}
            <button type='submit'> Entrar </button>

        </form>
    
    </>
  )
}

export {LoginPage}