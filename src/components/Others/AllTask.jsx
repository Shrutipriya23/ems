
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    // Retrieve employees data from localStorage
    const employees = JSON.parse(localStorage.getItem("employees"));
    if (employees) {
      // Set all employees' tasks to state
      setUserTasks(employees);
    }
  }, []); // Make sure to re-fetch data on component mount

  const handleOptionChange = (e) => {
    const selectedEmployee = e.target.value;

    // Fetch employees data from localStorage
    const employees = JSON.parse(localStorage.getItem('employees'));

    // Filter the employee based on selected name
    const filteredEmployee = employees.filter((employee) => employee.firstName === selectedEmployee);

    if (filteredEmployee.length > 0) {
      // Set the filtered employee data into state
      setUserTasks(filteredEmployee);
    } else {
      setUserTasks(employees); // Reset to all employees if no match
    }
  };

  if (!userData || !userData.employees) {
    return <div>Loading employee tasks...</div>;
  }

  return (
      
      <div className=" py-5 mt-16 border-2 border-orange-950 rounded-3xl  shadow-md ">
      {/* Dropdown to select employee */}
      <div className="mb-4">
        <select
          onChange={handleOptionChange}
          className="border py-2 px-4  text-white bg-[#43291f] rounded-lg"
        >
          <option value="">Filter Employee</option>
          {userTasks
            .map(employee => employee.firstName)
            .sort()
            .map((name, idx) => (
              <option key={idx} value={name}>
                {name}
              </option>
            ))}
        </select>
      </div>
      
      <div className="bg-[#e1d9d8]  border-2 text-orange-950  py-2  flex justify-between ">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h2 className="text-lg font-medium w-1/5">Date</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>

      <div>
        {userTasks.map((employee, idx) => (
          <div key={idx} className="border-2 border-[#e1d9d8]  py-2 px-4 flex justify-between  items-center rounded">
            <h2 className="text-lg  w-1/5 text-orange-950 ">{employee.firstName}</h2>
            <div className="w-1/5">
              {employee.tasks.map((task, idx) => (
                <div key={idx} className="text-md  text-[#444649] ">
                  {task.date}
                </div>
              ))}
            </div>
            <h3 className="text-lg  w-1/5 text-[#444649]">{employee.taskCount.new_task}</h3>
            <h5 className="text-lg  w-1/5  text-[#444649]">{employee.taskCount.active}</h5>
            <h5 className="text-lg  w-1/5 text-green-700">{employee.taskCount.completed}</h5>
            <h5 className="text-lg  w-1/5 text-red-700">{employee.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default AllTask;







