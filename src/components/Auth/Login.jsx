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
    <div style={{ backgroundColor: '#333333' }} className= "flex  h-screen  items-center justify-center rounded-xl  bg-black">

        
    
        <div className="flex items-center justify-center h-[80%] w-[88%] rounded-3xl border-2  border-none bg-black">

       {/* left side */}
      <div className="w-[48%] h-[95%]  bg-center rounded-2xl " style={{ backgroundImage: "url('/oglogin.png')" }}>
        
      </div>

      
     
    

        


    {/* right side */}

        <div className=" w-[50%] rounded-xl">
          {/* <div className="flex flex-col justify-start px-40 text-white text-bold ">Hello,</div>
          <br/>
          <div>Welcome or Welcome Back!</div> */}
          <div className="flex flex-col justify-start  text-white text-bold  pl-[188px] font-semibold text-3xl">Hello,</div>
          
          <div className="flex flex-col justify-start  text-white text-bold  pl-[188px] mb-10 font-semibold text-3xl" >Welcome or Welcome Back!</div>
            <form  onSubmit={(e)=>{
                submitHandler(e)
            }}  className=" flex flex-col items-center justify-center  ">

          

            <input required value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }} className=" border-2 border-gray-700 rounded-xl  text-xl text-white outline-none bg-transparent py-3 px-5 placeholder:text-gray-300" type="email" placeholder="Enter your email"></input>

            <input required value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}className="border-2 border-gray-700 rounded-xl  text-xl text-white outline-none bg-transparent py-3 px-5 mt-4 placeholder:text-gray-300"  type="password" placeholder="Enter your password"></input>

            <button className=" border-none bg-purple-800 rounded-full  text-xl text-white outline-none mt-6 py-2.3 px-5 h-10 w-[40%] placeholder:text-white ">Log In</button>

            </form>
        </div>
        </div>

    </div>
    
 

  )
}

export default Login
