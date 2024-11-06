import React, { useState } from 'react'


const Login = ({handleLogin}) => {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail("");
        setPassword("");


    }



    return (
    <div className= "flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <form  onSubmit={(e)=>{
                submitHandler(e)
            }}  className=" flex flex-col items-center justify-center ">

            <input required value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }} className=" border-2 border-emerald-600 rounded-full  text-xl text-white outline-none bg-transparent py-3 px-5 placeholder:text-gray-300" type="email" placeholder="Enter your email"></input>

            <input required value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}className="border-2 border-emerald-600 rounded-full  text-xl text-white outline-none bg-transparent py-3 px-5 mt-4 placeholder:text-gray-300"  type="password" placeholder="Enter your password"></input>

            <button className=" border-none bg-emerald-600 rounded-full  text-xl text-white outline-none mt-6 py-3 px-5 w-full placeholder:text-white">Log In</button>

            </form>
        </div>

    </div>
    
 

  )
}

export default Login
