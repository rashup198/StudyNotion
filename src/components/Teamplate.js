import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frameImage from '../assets/frame.png'
import {FcGoogle} from 'react-icons/fc'

const Teamplate = ({title , desc1, desc2, image , formtype, setIsLoggedIn}) => {
  console.log(formtype);
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-12 mx-auto'>
      <div>
      <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.3rem]'>{title}</h1>

      <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
        <span className='text-richblack-100'>{desc1}</span>
        <br></br>
        <span className='text-blue-100'>{desc2}</span>
      </p>

         {formtype === "Signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}   

        <div className='flex w-full my-4 gap-x-2  items-center'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading-[1.375rem] '>or</p>
            <div className='w-full h-[1px] bg-richblack-700 '></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border broder-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'> 
            <FcGoogle/>
            <p>Sign Up with Google</p>
        </button>

      </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage} alt="frame" 
                width={558} 
                height={504} 
                loading="lazy"/>

            <img className='absolute top-4 right-3'
             src={image} alt="student" 
                width={558} 
                height={504} 
                loading="lazy"/>
        </div>

    </div>
  )
}

export default Teamplate
