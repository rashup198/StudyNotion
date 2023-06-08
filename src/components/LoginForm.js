import React from 'react'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai' ;
const LoginForm = () => {

    const[formData, setFormData] = useState({
        email: "",password: ""
    })

    const[showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData( (prevData)=>(
        {...prevData, [event.target.name]: event.target.value}))

    }
  return (
    <form>
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

            <link to="#">
                <p>
                    Forgot Password?
                </p>
            </link>
        </label>

    </form>
  )
}

export default LoginForm