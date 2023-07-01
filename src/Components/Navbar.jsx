import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/utils/routes'
import { useGlobalContext } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Navbar = () => {

  const { dentistsDispatch} = useGlobalContext()

  const changeTheme = () => {
      dentistsDispatch({type: 'CHANGE_THEME', payload: "dark"})
  }

  return (
    <nav className='nav-bar'>
      <section>
        <img src="/images/DH.png" alt="" />
      </section>
      <section>
      <Link className="nav-link" to={routes.home}>
            Home
          </Link>
          <Link className="nav-link" to={routes.contact}>
            Contact
          </Link>
          <Link className="nav-link" to={routes.favs}>
            Favs
          </Link>
      <button className="theme-button" onClick={changeTheme}>Change theme</button>
      </section>
          
    </nav>
  )
}

export default Navbar