// // import React, { useContext, useEffect, useState } from 'react';
// // import Login from  "./components/Auth/Login";
// // import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
// // import AdminDashboard from './components/Dashboard/AdminDashboard';
// // import { AuthContext } from './context/AuthProvider';


// // const App = () => {
  
// //   const [user ,setUser] = useState(null);
// //  // const [userData,setUserData] = useContext(AuthContext);
// //  const [userData] = useContext(AuthContext);
 
// //   const [loggedInUserData, setloggedInUserData]= useState(null);
  
// //..............................................................................................
//   // useEffect(() =>{
//   //   const loggedInUser =localStorage.getItem("loggedInUser");
//   //   if(loggedInUser){
//   //     const userData =JSON.parse(loggedInUser);
//   //     setUser(userData.role);
//   //     setloggedInUserData(userData.data);
//   //   }
//   // }, [])                     not in use
//   //.............................................................................................
// //   useEffect(() => {
// //     const loggedInUser = localStorage.getItem("loggedInUser");
// //     if (loggedInUser) {
// //         const parsedData = JSON.parse(loggedInUser);
// //         setUser(parsedData.role);
// //         setloggedInUserData(parsedData.data);
// //     }
// // }, []);
//  //.............................................................................................................// 
// // const handleLogin = (email, password) => {
// //     if (email == "admin@me.com" && password == "123") {
// //       setUser("admin");
// //       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
// //     } else if (userData) { // Check if employees exist
// //       let employee = userData.find(e => e.email == email && e.password == password);
// //       if (employee) {
// //         setUser("employee");
// //         setloggedInUserData(employee);
// //         localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
// //       } else {
// //         alert("Invalid credentials");
// //       }
// //     } else {
// //       alert("Employee data not available");
// //     }
// //   };                                                           not in use
// //..................................................................................................................//
// // const handleLogin = (email, password) => {
// //   if (email === "admin@me.com" && password === "123") {
// //       setUser("admin");
// //       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
// //   } else if (userData.employees) {  // Check if employees array exists
// //       let employee = userData.employees.find(e => e.email === email && e.password === password);
// //       if (employee) {
// //           setUser("employee");
// //           setloggedInUserData(employee);
// //           localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
// //       }
// //        else {
// //           alert("Invalid Credentials")
// //       }
// //   } else {
// //       alert("Employee data not available");
// //   }
// // };
  
  
// //   return (
// //     <>
   
// //     {!user ? <Login handleLogin={handleLogin} /> : ''}
// //     {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    
// //     </>
// //   )
// // }

// // export default App



// import React, { useContext, useEffect, useState } from 'react';
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import FullDashboard from './components/Dashboard/FullDashboard'; // Import FullDashboard
// import { AuthContext } from './context/AuthProvider';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [userData] = useContext(AuthContext);
//   const [loggedInUserData, setloggedInUserData] = useState(null);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       const parsedData = JSON.parse(loggedInUser);
//       setUser(parsedData.role);
//       setloggedInUserData(parsedData.data);
//     }
//   }, []);

//   const handleLogin = (email, password) => {
//     if (email === "admin@me.com" && password === "123") {
//       setUser("admin");
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    
//     } else if (userData.employees) { // Check if employees array exists
//       let employee = userData.employees.find(e => e.email === email && e.password === password);
//       if (employee) {
//         setUser("employee");
//         setloggedInUserData(employee);
//         localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
//       }else if (email === "1@1.com" && password === "123") {
//         setUser("full-dashboard");
//         localStorage.setItem("loggedInUser", JSON.stringify({ role: "full-dashboard" }));
//       }
//       else {
//         alert("Invalid credentials");
//       }
//     } else {
//       alert("Employee data not available");
//     }
//   };
//   //else if (email === "1@1.com" && password === "123") {
//     //setUser("full-dashboard");
//     //localStorage.setItem("loggedInUser", JSON.stringify({ role: "full-dashboard" }));

//   return (
//     <>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === "admin" ? (
//         <AdminDashboard changeUser={setUser} />
//       ) : user === "employee" ? (
//         <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
//       ) : user === "full-dashboard" ? (
//         <FullDashboard changeUser={setUser} />
//       ) : null}



//       {/* {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === "admin" ? (
//         <AdminDashboard changeUser={setUser} />
//       ) : user === "employee" ? (
//         <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />)
//         : null} */}
//     </>
//   );
// };

// export default App;





import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import necessary components
import Login from "./components/Auth/Login";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import FullDashboard from './components/Dashboard/FullDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [userData] = useContext(AuthContext);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  // Check localStorage for logged-in user
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser);
      setUser(parsedData.role);
      setloggedInUserData(parsedData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData.employees) { // Check if employees exist
      let employee = userData.employees.find(e => e.email === email && e.password === password);
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else if (email === "1@1.com" && password === "123") {
        setUser("full-dashboard");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "full-dashboard" }));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Employee data not available");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setloggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to={`/${user}`} />} />
        
        {/* Admin Dashboard Route */}
        <Route
          path="/admin"
          element={user === "admin" ? <AdminDashboard changeUser={handleLogout} /> : <Navigate to="/admin" />}
        />

        {/* Employee Dashboard Route */}
        <Route
          path="/employee"
          element={
            user === "employee" ? (
              <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
            ) : (
              <Navigate to="/employee" />
            )
          }
        />

        {/* Full Dashboard Route */}
        <Route
          path="/full-dashboard"
          element={
            user === "full-dashboard" ? (
              <FullDashboard changeUser={handleLogout} />
            ) : (
              <Navigate to="/full-dashboard" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

