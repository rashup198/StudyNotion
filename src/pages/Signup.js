import React from 'react'
import Teamplate from '../components/Teamplate'
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Teamplate
    title="Join the millions learning to code with StudyNotion For free"
    desc1="Build skills for today, tomorrow and beyond"
    desc2="Education to future-proof your career"
    image={signupImg}
    formtype="Signup"
    setIsLoggedIn={setIsLoggedIn}></Teamplate>
  )
}

export default Signup
