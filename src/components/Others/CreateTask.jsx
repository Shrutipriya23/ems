// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../context/AuthProvider';

// const CreateTask = () => {
//   const [userData, setUserData] = useContext(AuthContext);
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskDate, setTaskDate] = useState('');
//   const [asignTo, setAsignTo] = useState('');
//   const [category, setCategory] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const newTaskData = {
//       title: taskTitle,
//       description: taskDescription,
//       date: taskDate,
//       category,
//       active: false,
//       new_task: true,
//       failed: false,
//       completed: false,
//     };

//     // Clone userData employees
//     const updatedEmployees = [...(userData.employees || [])];

//     // Find the employee by the name they are assigned to
//     const employeeIndex = updatedEmployees.findIndex(
//       (employee) => employee.firstName === asignTo
//     );

//     if (employeeIndex !== -1) {
//       // Add new task to the employee's task list
//       updatedEmployees[employeeIndex].tasks.push(newTaskData);

//       // Increment the new task count
//       updatedEmployees[employeeIndex].taskCount.new_task += 1;

//       // Update the global userData
//       const updatedUserData = { ...userData, employees: updatedEmployees };
//       setUserData(updatedUserData);

//       // Update localStorage
//       localStorage.setItem('employees', JSON.stringify(updatedEmployees));

//       console.log('Task added and context updated.');
//       console.log(updatedUserData);
//     } else {
//       console.log('Employee not found');
//     }

//     // Reset form fields
//     setTaskTitle('');
//     setCategory('');
//     setAsignTo('');
//     setTaskDate('');
//     setTaskDescription('');
//   };

//   return (
//     <div className="p-5 border-2 border-orange-600 mt-5 rounded">
//       <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
//         <div className="w-1/2">
//           <div>
//             <h3 className="text-sm text-black font-semibold mb-0.5">Task Title</h3>
//             <input
//               value={taskTitle}
//               onChange={(e) => setTaskTitle(e.target.value)}
//               className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
//               type="text"
//               placeholder="Make a UI design"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-black font-semibold mb-0.5">Date</h3>
//             <input
//               value={taskDate}
//               onChange={(e) => setTaskDate(e.target.value)}
//               className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
//               type="date"
//             />
//           </div>
//           <div>
//             <h3 className="text-sm text-black font-semibold mb-0.5">Assign to</h3>
//             <select
//               value={asignTo}
//               onChange={(e) => setAsignTo(e.target.value)}
//               className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
//             >
//               <option value="">Select Employee</option>
//               <option value="Aarav">Aarav</option>
//               <option value="Ishaan">Ishaan</option>
//               <option value="Sneha">Sneha</option>
//               <option value="Arjun">Arjun</option>
//               <option value="Neha">Neha</option>
//             </select>
//           </div>
//           <div>
//             <h3 className="text-sm text-black font-semibold mb-0.5">Category</h3>
//             <input
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
//               type="text"
//               placeholder="Design, Dev, etc."
//             />
//           </div>
//         </div>

//         <div className="w-2/5 flex flex-col items-start">
//           <h3 className="text-sm text-black font-semibold mb-0.5">Description</h3>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//             className="w-full h-44 text-sm text-black py-2 px-4 rounded outline-none bg-transparent border-[1px] border-black"
//           ></textarea>
//           <button className="bg-black py-3 hover:bg-gray-700 px-5 rounded text-sm mt-4 w-full">
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;


import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTaskData = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      new_task: true,
      failed: false,
      completed: false,
    };

    const updatedEmployees = [...(userData.employees || [])];

    const employeeIndex = updatedEmployees.findIndex(
      (employee) => employee.firstName === assignTo
    );

    if (employeeIndex !== -1) {
      updatedEmployees[employeeIndex].tasks.push(newTaskData);
      updatedEmployees[employeeIndex].taskCount.new_task += 1;

      const updatedUserData = { ...userData, employees: updatedEmployees };
      setUserData(updatedUserData);

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      console.log("Task added and context updated.");
      console.log(updatedUserData);
    } else {
      console.log("Employee not found");
    }

    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="p-5  mt-5 rounded-lg text-black border-2 border-black bg-white shadow">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full gap-6">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Task Title</label>
            <Input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI design"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
            <Input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            //   className="appearance-none text-black py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-300"
              className="appearance-none text-gray-500 py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-300 pr-10"
            
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Assign to</label>
            <Select onValueChange={(value) => setAssignTo(value)}>
              <SelectTrigger className="text-gray-500">
                <SelectValue  placeholder="Select Employee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Aarav">Aarav</SelectItem>
                <SelectItem value="Ishaan">Ishaan</SelectItem>
                <SelectItem value="Sneha">Sneha</SelectItem>
                <SelectItem value="Arjun">Arjun</SelectItem>
                <SelectItem value="Neha">Neha</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <Textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows={6}
            placeholder="Add task details here..."
          />
          <Button type="submit" className="mt-4 w-full">
            Create Task
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;


