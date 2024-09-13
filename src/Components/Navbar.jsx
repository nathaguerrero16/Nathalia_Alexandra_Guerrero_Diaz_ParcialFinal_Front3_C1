import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalStates } from './utils/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useGlobalStates();

  const toggleTheme = () => {    
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "THEME", payload: newTheme });
  };

  return (
    <nav className='navbarContainer'>
      <h2>DH Odonto</h2>
        <div className='navbarPages'>
          <Link to="/">
            <h4>Inicio</h4>
          </Link>
          <Link to="/contact">
            <h4>Contacto</h4>
          </Link>
          <Link to="/favs">
            <h4>Destacados</h4>
          </Link>
          <button onClick={toggleTheme} className='buttonTheme'>{state.theme === "light" ? "🌙" : "🌞"}</button>
        </div>
    </nav>
  )
}

export default Navbar