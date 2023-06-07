import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <div className='flex'>

        <Link to="/">
            <img src={Logo} alt='Logo' width={160} height={32} loading='lazy'></img>
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to="/">About</Link>
                </li>

                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* login signUp Logout Dashboard */}


        <div>
            <button>
                
            </button>
        </div>
      
    </div>
  )
}

export default Navbar

