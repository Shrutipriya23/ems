
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');
    const [newTask, setNewTask] = useState({});

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

        // Get employees data from localStorage
        const data = JSON.parse(localStorage.getItem('employees'));

        // Find the employee by the name they are assigned to
        const employeeIndex = data.findIndex((elem) => elem.firstName === asignTo);

        if (employeeIndex !== -1) {
            // Add new task to employee's task list
            data[employeeIndex].tasks.push(newTaskData);

            // Increment the new task count
            data[employeeIndex].taskCount.new_task += 1;

            // Update the localStorage with the updated employee data
            localStorage.setItem('employees', JSON.stringify(data));

            // Update the userData state to reflect changes
            setUserData({ ...userData, employees: data });

            console.log('Updated userData:', userData);
        } else {
            console.log('Employee not found');
        }

        // Reset form fields
        setTaskTitle('');
        setCategory('');
        setAsignTo('');
        setTaskDate('');
        setTaskDescription('');
    };

    return (
        <div className="p-5 border-2 border-orange-600 mt-5 rounded">
            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }}
                className="flex flex-wrap w-full items-start justify-between"
            >
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-black font-semibold mb-0.5">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value);
                            }}
                            className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
                            type="text"
                            placeholder="Make a UI design"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-black font-semibold mb-0.5">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value);
                            }}
                            className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-black font-semibold mb-0.5">Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value);
                            }}
                            className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
                            type="text"
                            placeholder="Employee name"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-black font-semibold mb-0.5">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                            className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
                            type="text"
                            placeholder="Design, Dev, etc."
                        />
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-black font-semibold mb-0.5">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value);
                        }}
                        className="w-full h-44 text-sm text-black py-2 px-4 rounded outline-none bg-transparent border-[1px] border-black"
                    ></textarea>
                    <button className="bg-black py-3 hover:bg-gray-700 px-5 rounded text-sm mt-4 w-full">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;

// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../context/AuthProvider';

// const CreateTask = () => {
//     const [userData, setUserData] = useContext(AuthContext);
//     const [taskTitle, setTaskTitle] = useState('');
//     const [taskDescription, setTaskDescription] = useState('');
//     const [taskDate, setTaskDate] = useState('');
//     const [asignTo, setAsignTo] = useState('');
//     const [category, setCategory] = useState('');

//     const submitHandler = (e) => {
//         e.preventDefault();

//         const newTaskData = {
//             title: taskTitle,
//             description: taskDescription,
//             date: taskDate,
//             category,
//             active: false,
//             new_task: true,
//             failed: false,
//             completed: false,
//         };

//         // Retrieve employees data from localStorage
//         const employees = JSON.parse(localStorage.getItem('employees')) || [];

//         // Find the employee by name to assign the task
//         const employeeIndex = employees.findIndex((employee) => employee.firstName === asignTo);

//         if (employeeIndex !== -1) {
//             // Add the new task to the employee's task list
//             employees[employeeIndex].tasks.push(newTaskData);

//             // Increment the new task count
//             employees[employeeIndex].taskCount.new_task += 1;

//             // Update localStorage with updated employee data
//             localStorage.setItem('employees', JSON.stringify(employees));

//             // Update the AuthContext state with new employee data
//             setUserData({ ...userData, employees });

//             console.log('Task created and updated in localStorage.',userData);
            
//         } else {
//             console.log('Employee not found. Please check the name.');
//         }

//         // Reset form fields
//         setTaskTitle('');
//         setTaskDescription('');
//         setTaskDate('');
//         setAsignTo('');
//         setCategory('');
//     };

//     return (
//         <div className="p-5 border-2 border-orange-600 mt-5 rounded">
//             <form
//                 onSubmit={submitHandler}
//                 className="flex flex-wrap w-full items-start justify-between"
//             >
//                 <div className="w-1/2">
//                     <div>
//                         <h3 className="text-sm text-black font-semibold mb-0.5">Task Title</h3>
//                         <input
//                             value={taskTitle}
//                             onChange={(e) => setTaskTitle(e.target.value)}
//                             className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
//                             type="text"
//                             placeholder="Make a UI design"
//                         />
//                     </div>
//                     <div>
//                         <h3 className="text-sm text-black font-semibold mb-0.5">Date</h3>
//                         <input
//                             value={taskDate}
//                             onChange={(e) => setTaskDate(e.target.value)}
//                             className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
//                             type="date"
//                         />
//                     </div>
//                     <div>
//                         <h3 className="text-sm text-black font-semibold mb-0.5">Assign to</h3>
//                         <input
//                             value={asignTo}
//                             onChange={(e) => setAsignTo(e.target.value)}
//                             className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
//                             type="text"
//                             placeholder="Employee name"
//                         />
//                     </div>
//                     <div>
//                         <h3 className="text-sm text-black font-semibold mb-0.5">Category</h3>
//                         <input
//                             value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                             className="text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-black mb-4"
//                             type="text"
//                             placeholder="Design, Dev, etc."
//                         />
//                     </div>
//                 </div>

//                 <div className="w-2/5 flex flex-col items-start">
//                     <h3 className="text-sm text-black font-semibold mb-0.5">Description</h3>
//                     <textarea
//                         value={taskDescription}
//                         onChange={(e) => setTaskDescription(e.target.value)}
//                         className="w-full h-44 text-sm text-black py-2 px-4 rounded outline-none bg-transparent border-[1px] border-black"
//                     ></textarea>
//                     <button className="bg-black py-3 hover:bg-gray-700 px-5 rounded text-sm mt-4 w-full">
//                         Create Task
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default CreateTask;




