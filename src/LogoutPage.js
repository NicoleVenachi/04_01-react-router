import React from 'react'
import { useAuth } from './auth';

function LogoutPage() {

  const auth = useAuth();

  const logout = (event)  =>{
    event.preventDefault();
    auth.logout()
  }

  return (
    <>
        <h1> Logout </h1>

        {/* Le pongo al for una funci'on para el evento onSubmit */}
        <form onSubmit={logout}> 
            <label> Segur@ que quieres salir? </label>

            {/* //btn para logout*/}
            <button type='submit'> salir </button>

        </form>
    
    </>
  )
}

export {LogoutPage}