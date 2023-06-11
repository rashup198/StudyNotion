import React from 'react'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai' ;
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



const LoginForm = ({setIsLoggedIn}) => {

   

    const[formData, setFormData] = useState({
        email: "",password: ""
    })

    const[showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData( (prevData)=>(
        {...prevData, 
            [event.target.name]: event.target.value}))

    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Login Successful")
        return <Navigate to="/dashboard"></Navigate>

    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full' htmlFor="email">
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address <sup className='text-pink-200 text-lg'>*</sup>
        </p>
        
        <input required
         type="email"
         name="email" 
         id="email" 
         value={formData.email}
         onChange={changeHandler}
        placeholder="Enter your email address"
        className='w-full h-10 px-[12px] rounded-md bg-richblack-800 border border-richblack-5 focus:outline-none focus:ring-2 focus:ring-white border-none'
        ></input>
        </label>

        <label className='w-full relative' >
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password <sup className='text-pink-200 text-lg'>*</sup>
        </p>

        <input 
        type={showPassword ? "text" : "password"}
        required
        placeholder='Enter your Password'
        value={formData.password}
        name='password'
        onChange={changeHandler}
        className='w-full h-10 px-[12px] rounded-md bg-richblack-800 border border-richblack-5 focus:outline-none focus:ring-2 focus:ring-white border-none'>
        </input>
       
        <span className='absolute right-3 top-[40px] cursor-pointer' onClick={()=>
            setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}</span>

            <Link to="#">
                <p className='text-[13px] text-white text-right hover:underline  '>
                    Forgot Password?
                </p>
            </Link>
        </label>
        <button className='w-full bg-[#f3f32a] h-[35px] rounded-md  focus:outline-none focus:ring-2 focus:ring-black ' >
            Sign In
        </button>

    </form>
  )
}

export default LoginForm