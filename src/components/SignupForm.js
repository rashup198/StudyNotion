 import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
 import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai' ;
 import { useNavigate } from 'react-router-dom';
 

 
 const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData,setFormData] =useState({
        firstName: "", lastName:"", email:"", password:"", confirmPassword:""
    })

    const[showPassword, setShowPassword] = useState(false);
    const[accountType, setAccountType] = useState("student");

    function changeHandler(event){
        setFormData( (prevData)=>(
        {...prevData, [event.target.name]: event.target.value}))

    }
    function submitHandler(event){
        event.preventDefault()
        if(formData.password !== formData.confirmPassword){
            toast.error("Password and Confirm Password must be same")
            return;
            }
            setIsLoggedIn(true)
            toast.success("Account Created Successfully")
            const accountData={
                ...formData
            }

            console.log(accountData);

            navigate("/dashboard");
        }
   return (
     <div className=''>

     {/* student instructor tab */}

     <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
        className={`${accountType === "student" 
        ? "bg-richblack-900 text-richblack-5" 
        : "bg-transparent text-richblack-200"} px-4 py-1 rounded-full text-[0.875rem] transition-all duration-100 font-semibold }`}
         onClick={()=>{
            setAccountType("student")
        }}>
            Student
        </button>
        <button
         className={`${accountType === "instructor" 
        ? "bg-richblack-900 text-richblack-5" 
        : "bg-transparent text-richblack-200"} px-4 py-1 rounded-full text-[0.875rem] transition-all duration-100 font-semibold  }`} 
        onClick={()=>{
            setAccountType("instructor")
        }}>
            Instructor
        </button>
     </div>

     <form onSubmit={submitHandler}>

     {/* First name and Last name */}
        <div className='flex gap-x-4 mb-4'>
            <lable className='w-full'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200 text-md'>*</sup></p>
                <input type="text" placeholder="Enter your first name" required
                onChange={changeHandler}
                name='firstName'
                value={formData.firstName}
                className='w-full h-10 px-[12px] rounded-md bg-richblack-800 border border-richblack-5 focus:outline-none focus:ring-2 focus:ring-white border-none'></input>
            </lable>


            <lable  className='w-full'>
                <p   className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200 text-md'>*</sup></p>
                <input type="text" placeholder="Enter your last name" required
                onChange={changeHandler}
                name='lastName'
                value={formData.lastName}
                className='w-full h-10 px-[12px] rounded-md bg-richblack-800 border border-richblack-5 focus:outline-none focus:ring-2 focus:ring-white border-none'></input>
            </lable>

       </div>

       <lable  className='w-full'>

       {/* email address */}
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200 text-md'>*</sup></p>
                <input type="email" placeholder="Enter your email address" required
                onChange={changeHandler}
                name='email'
                value={formData.email}
                className='w-full h-10 px-[12px] rounded-md bg-richblack-800 border border-richblack-5 focus:outline-none focus:ring-2 focus:ring-white border-none'></input>
       </lable>

         {/* password and confirm password */}
        <div className='flex gap-x-4 mt-4 mb-4'>

        {/* create password */}
            <lable  className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200 text-md'>*</sup></p>
                <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter Password"
                required
                onChange={changeHandler}
                name='password'
                value={formData.password}
                className='w-full h-10 px-[12px] rounded-md bg-richblack-800 border border-richblack-5 focus:outline-none focus:ring-2 focus:ring-white border-none'>
                </input>
                <span className='absolute right-3 top-[38px] cursor-pointer'  onClick={()=>
            setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}</span>
            </lable>

            {/* confirm Password */}

            <lable className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200 text-md'>*</sup></p>
                <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Confirm Password"
                required
                onChange={changeHandler}
                name='confirmPassword'
                value={formData.confirmPassword}
                className='w-full h-10 px-[12px] rounded-md bg-richblack-800 border border-richblack-5 focus:outline-none focus:ring-2 focus:ring-white border-none'>
                </input>
                
                <span className='absolute right-3 top-[35px] cursor-pointer' onClick={()=>
            setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}</span>
            </lable>
         </div>

         <button className='w-full bg-[#f3f32a] h-[35px] rounded-md  focus:outline-none focus:ring-2 focus:ring-black mt-4'  >
            Create Account
         </button>
     </form>

     </div>
   )
 }

 export default SignupForm
 
