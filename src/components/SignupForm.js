 import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
 import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai' ;
 import { useNavigate } from 'react-router-dom';
 

 
 const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData,setFormData] =useState({
        firstName: "", lastName:"", email:"", password:"", confirmPassword:""
    })

    const[showPassword, setShowPassword] = useState(false)

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
     <div>
     {/* student instructor tab */}

     <div>
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>
     </div>

     <form onSubmit={submitHandler}>

     {/* First name and Last name */}
        <div>
            <lable>
                <p>First Name <sup>*</sup></p>
                <input type="text" placeholder="Enter your first name" required
                onChange={changeHandler}
                name='firstName'
                value={formData.firstName}></input>
            </lable>


            <lable>
                <p>Last Name <sup>*</sup></p>
                <input type="text" placeholder="Enter your last name" required
                onChange={changeHandler}
                name='lastName'
                value={formData.lastName}></input>
            </lable>

       </div>

       <lable>

       {/* email address */}
                <p>Email Address <sup>*</sup></p>
                <input type="email" placeholder="Enter your email address" required
                onChange={changeHandler}
                name='email'
                value={formData.email}></input>
       </lable>

         {/* password and confirm password */}
        <div>

        {/* create password */}
            <lable>
                <p>Create Password<sup>*</sup></p>
                <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter Password"
                required
                onChange={changeHandler}
                name='password'
                value={formData.password}>
                </input>
                <span onClick={()=>
            setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)}</span>
            </lable>

            {/* confirm Password */}

            <lable>
                <p>confirm Password<sup>*</sup></p>
                <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Confirm Password"
                required
                onChange={changeHandler}
                name='confirmPassword'
                value={formData.confirmPassword}>
                </input>
                <span onClick={()=>
            setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)}</span>
            </lable>
         </div>

         <button >
            Create Account
         </button>
     </form>

     </div>
   )
 }

 export default SignupForm
 
