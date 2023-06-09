import React from 'react'
import Signup from '../pages/Signup'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frameImage from '../assets/frame.svg'

const Teamplate = ({title , desc1, desc2, image , formtype, setIsLoggedIn}) => {
  return (
    <div>
      <div>
      <h1>{title}</h1>
      <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
      </p>

         {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}   
     

        <div>
            <div></div>
            <p>or</p>
            <div></div>
        </div>

        <button>
            <p>Sign Up with Google</p>
        </button>

      </div>
        <div>
            <img src={frameImage} alt="frame" 
                width={558} 
                height={504} 
                loading="lazy"/>

            <img src={image} alt="student" 
                width={558} 
                height={504} 
                loading="lazy"/>
        </div>

    </div>
  )
}

export default Teamplate
