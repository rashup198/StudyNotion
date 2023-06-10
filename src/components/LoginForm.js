import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai' ;
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';



const LoginForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const[formData, setFormData] = useState({
        email: "",password: ""
    })

    const[showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData( (prevData)=>(
        {...prevData, [event.target.name]: event.target.value}))

    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Login Successful")
        navigate("/dashboard")

    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="email">
        <p>
            Email Address <sub>*</sub>
        </p>
        <input required
         type="email"
         name="email" 
         id="email" 
         value={formData.email}
         onChange={changeHandler}
        placeholder="Enter your email address"></input>
        </label>

        <label>
        <p>
            Password <sub>*</sub>
        </p>
        <input 
        type={showPassword ? "text" : "password"}
        required
        placeholder='Enter your Password'
        value={formData.password}
        name='password'
        onChange={changeHandler}>
        </input>
        <span onClick={()=>
            setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)}</span>

            <Link to="#">
                <p>
                    Forgot Password?
                </p>
            </Link>
        </label>
        <button >
            Sign In
        </button>

    </form>
  )
}

export default LoginForm