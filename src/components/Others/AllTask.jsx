// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../context/AuthProvider';

// const AllTask = () => {
//   const [userData] = useContext(AuthContext);
//   const [userTasks, setUserTasks] = useState([]);
//   const [allEmployees, setAllEmployees] = useState([]);
//   const [sortOption, setSortOption] = useState(''); // Track selected sort option

//   useEffect(() => {
//     if (userData && userData.employees) {
//       setAllEmployees(userData.employees);
//       setUserTasks(userData.employees);
//     }
//   }, [userData]); // Update whenever userData changes

//   const handleEmployeeFilter = (e) => {
//     const selectedEmployee = e.target.value;

//     if (selectedEmployee) {
//       const filteredEmployee = allEmployees.filter(
//         (employee) => employee.firstName === selectedEmployee
//       );
//       setUserTasks(filteredEmployee);
//     } else {
//       setUserTasks(allEmployees);
//     }
//   };

//   const handleSortChange = (e) => {
//     const selectedOption = e.target.value;
//     setSortOption(selectedOption);

//     const sortedTasks = userTasks.map((employee) => {
//       const sortedEmployeeTasks = [...employee.tasks];
//       if (selectedOption === 'asc') {
//         sortedEmployeeTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
//       } else if (selectedOption === 'desc') {
//         sortedEmployeeTasks.sort((a, b) => new Date(b.date) - new Date(a.date));
//       }
//       return { ...employee, tasks: sortedEmployeeTasks };
//     });

//     setUserTasks(sortedTasks);
//   };

//   if (!userData || !userData.employees) {
//     return <div>Loading employee tasks...</div>;
//   }

//   return (
//     <div className="py-5 mt-16 border-2 border-orange-950 rounded-3xl shadow-md">
//       {/* Filter and Sort Options */}
//       <div className="mb-4 flex gap-4 items-center">
//         {/* Employee Filter Dropdown */}
//         <select
//           onChange={handleEmployeeFilter}
//           className="border py-2 px-4 text-white bg-[#43291f] rounded-lg"
//         >
//           <option value="">Filter Employee</option>
//           {allEmployees
//             .map((employee) => employee.firstName)
//             .sort()
//             .map((name, idx) => (
//               <option key={idx} value={name}>
//                 {name}
//               </option>
//             ))}
//         </select>

//         {/* Sorting Dropdown */}
//         <select
//           onChange={handleSortChange}
//           className="border py-2 px-4 text-white bg-[#43291f] rounded-lg"
//           value={sortOption}
//         >
//           <option value="">Sort by Date</option>
//           <option value="asc">Sort by Date (Asc)</option>
//           <option value="desc">Sort by Date (Desc)</option>
//         </select>
//       </div>

//       {/* Table Header */}
//       <div className="bg-[#e1d9d8] border-2 text-orange-950 py-2 flex justify-between">
//         <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
//         <h2 className="text-lg font-medium w-1/5">Date</h2>
//         <h3 className="text-lg font-medium w-1/5">New Task</h3>
//         <h5 className="text-lg font-medium w-1/5">Active Task</h5>
//         <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
//         <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
//       </div>

//       {/* Employee Task List */}
//       <div>
//         {userTasks.map((employee, idx) => (
//           <div
//             key={idx}
//             className="border-2 border-[#e1d9d8] py-2 px-4 flex justify-between items-center rounded"
//           >
//             <h2 className="text-lg w-1/5 text-orange-950">{employee.firstName}</h2>
//             <div className="w-1/5">
//               {employee.tasks.map((task, idx) => (
//                 <div key={idx} className="text-md text-[#444649]">
//                   {task.date}
//                 </div>
//               ))}
//             </div>
//             <h3 className="text-lg w-1/5 text-[#444649]">{employee.taskCount.new_task}</h3>
//             <h5 className="text-lg w-1/5 text-[#444649]">{employee.taskCount.active}</h5>
//             <h5 className="text-lg w-1/5 text-green-700">{employee.taskCount.completed}</h5>
//             <h5 className="text-lg w-1/5 text-red-700">{employee.taskCount.failed}</h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllTask;






import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";
import CreateTask from "./CreateTask";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const [userTasks, setUserTasks] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    if (userData && userData.employees) {
      setAllEmployees(userData.employees);
      setUserTasks(userData.employees);
    }
  }, [userData]);

  const handleEmployeeFilter = (value) => {
    if (value) {
      const filteredEmployee = allEmployees.filter(
        (employee) => employee.firstName === value
      );
      setUserTasks(filteredEmployee);
    } else {
      setUserTasks(allEmployees);
    }
  };

  const handleSortChange = (value) => {
    setSortOption(value);

    const sortedTasks = userTasks.map((employee) => {
      const sortedEmployeeTasks = [...employee.tasks];
      if (value === "asc") {
        sortedEmployeeTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (value === "desc") {
        sortedEmployeeTasks.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      return { ...employee, tasks: sortedEmployeeTasks };
    });

    setUserTasks(sortedTasks);
  };

  if (!userData || !userData.employees) {
    return <div>Loading employee tasks...</div>;
  }

  return (
    <div className="py-8 mt-16 border  shadow-lg border-red-700  rounded-lg  bg-white relative">
      {/* Filter, Sort, and Create Task Buttons */}
      <div className="flex gap-4 mb-6 items-center justify-between pr-5">
        <div className="flex gap-4 items-center pl-5">
          {/* Employee Filter Dropdown */}
          <Select onValueChange={handleEmployeeFilter} defaultValue="">
            <SelectTrigger className="text-white bg-orange-950 flex justify-between w-[50%] ">
              <SelectValue placeholder="Filter Employee" />
            </SelectTrigger>
            <SelectContent className="text-orange-950">
              {allEmployees
                .map((employee) => employee.firstName)
                .sort()
                .map((name, idx) => (
                  <SelectItem key={idx} value={name}>
                    {name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          {/* Sorting Dropdown */}
          <Select onValueChange={handleSortChange} value={sortOption} defaultValue="">
            <SelectTrigger className="text-white bg-orange-950 flex justify-between w-[50%]">
              <SelectValue placeholder="Sort by Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-orange-950" value="asc">
                Sort by Date (Asc)
              </SelectItem>
              <SelectItem className="text-orange-950" value="desc">
                Sort by Date (Desc)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Create Task Button */}
        <Dialog >
          <DialogTrigger >
            <Button className="bg-orange-950 text-white flex items-center gap-2">
              <FaPlus className="h-4 w-4" />
              Create Task
            </Button>
            
          </DialogTrigger>
          <DialogContent className="p-6 text-black  ">
            {/* <DialogClose asChild>
              <Button className="absolute top-4 right-4">X</Button>
            </DialogClose> */}
            <CreateTask />
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg font-medium text-orange-950 w-[12%]">Employee Name</TableHead>
            <TableHead className="text-lg font-medium text-orange-950 w-[12%]">Date</TableHead>
            <TableHead className="text-lg font-medium text-orange-950 w-[12%]">New Task</TableHead>
            <TableHead className="text-lg font-medium text-orange-950 w-[12%]">Active Task</TableHead>
            <TableHead className="text-lg font-medium text-orange-950 w-[12%]">Completed Task</TableHead>
            <TableHead className="text-lg font-medium text-orange-950 w-[12%]">Failed Task</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userTasks.map((employee, idx) => (
            <TableRow key={idx}>
              <TableCell className="text-lg w-[12%] text-orange-950">{employee.firstName}</TableCell>
              <TableCell className="w-[12%]">
                {employee.tasks.map((task, idx) => (
                  <div className="text-lg  text-[#444649]" key={idx}>
                    {task.date}
                  </div>
                ))}
              </TableCell>
              <TableCell className="text-lg w-[12%] text-[#444649]">{employee.taskCount.new_task}</TableCell>
              <TableCell className="text-lg w-[12%] text-[#444649]">{employee.taskCount.active}</TableCell>
              <TableCell className="text-lg w-[12%] text-green-700">{employee.taskCount.completed}</TableCell>
              <TableCell className="text-lg w-[12%] text-red-700">{employee.taskCount.failed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllTask;
