import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>


            <nav className='navbar navbar-expand-lg  bg-dark  fw-bold'>

                <NavLink to='/' className="navbar-brand"><h3 className='text-warning  mx-4 fw-bold'>CRUD APP</h3></NavLink>


                <ul className='nav navbar- m-auto'>
                    <li className='nav-item mx-4'><NavLink className="nav-link text-light" to='/'>Home</NavLink></li>
                    <li className='nav-item mx-4'><NavLink className="nav-link text-light" to='/userdata'>Userdata</NavLink></li>
                </ul>
            </nav>


        </>
    )
}

export default Navbar
