import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly'>

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


        <div className=' flex ml-5 mr-3 gap-3'> 
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='text-black'>
                        Login
                    </button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button className='text-black'>
                        Sign Up
                    </button>
                </Link>
            }
            {  isLoggedIn &&
                <Link to="/">
                    <button>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div> 
  )
}

export default Navbar

