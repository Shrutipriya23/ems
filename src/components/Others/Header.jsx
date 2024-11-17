import React from 'react'
//import { useState, useEffect} from 'react'

const Header = (props) => {
  // const [username, setUsername] = useState("Admin");

  // useEffect(() => {
  //   // Fetch the logged-in user from localStorage
  //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //   if (loggedInUser && loggedInUser.firstName) {
  //     setUsername(loggedInUser.firstName); // Set username if user is logged in
  //   }
  // }, []); // Runs once on mount

  const logOutUser = ()=>{
    localStorage.setItem("loggedInUser","");
    props.changeUser("");
    

  }
  
  
  return (
    <div className="flex items-end justify-between">
      <h1 className=" text-2xl text-black font-medium">Hello, <span className="text-2xl font-bold">User👋🏻</span></h1>
      <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">Log Out</button>
    </div>
  )
}
// {data.firstName ? data.firstName : "Guest"}
export default Header
