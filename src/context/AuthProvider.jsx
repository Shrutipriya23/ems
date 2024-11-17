import React from 'react'
import { createContext, useState , useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
   
const [userData, setUserData] =useState({employees: []});  //{employees: []}
    useEffect(()=>{
        setLocalStorage()
        //const {employees}=getLocalStorage();
        const {employees}= getLocalStorage();
        //setUserData({employees});
        setUserData({ employees });
    }, [])



  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider


// import React, { createContext, useState, useEffect } from 'react';
// import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [userData, setUserData] = useState({ employees: [] });

//     useEffect(() => {
//         // Initialize local storage if not set
//         setLocalStorage();
        
//         // Fetch employees data from local storage on mount
//         const { employees } = getLocalStorage();
//         setUserData({ employees });
//     }, []);

//     const refreshUserData = () => {
//         // Re-fetch employees data from local storage
//         const { employees } = getLocalStorage();
//         setUserData({ employees });
//     };

//     return (
//         <AuthContext.Provider value={{ userData, setUserData, refreshUserData }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
