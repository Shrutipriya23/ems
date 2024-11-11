

 const employees = [
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "employee1@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Prepare Report",
          "description": "Compile Q3 financial report",
          "date": "2024-11-01",
          "category": "Finance"
        },
        {
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Update Documentation",
          "description": "Revise project documentation for clarity",
          "date": "2024-11-02",
          "category": "Documentation"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Client Meeting",
          "description": "Meeting with client to discuss project status",
          "date": "2024-10-29",
          "category": "Client Relations"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Ishaan",
      "email": "employee2@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Server Maintenance",
          "description": "Check server status and update software",
          "date": "2024-11-03",
          "category": "IT"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Review Code",
          "description": "Code review for the recent feature update",
          "date": "2024-10-28",
          "category": "Development"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Sneha",
      "email": "employee3@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "tasks": [
        {
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Product Launch Plan",
          "description": "Draft plan for new product launch",
          "date": "2024-11-05",
          "category": "Marketing"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Team Training",
          "description": "Conduct training session on new tool",
          "date": "2024-11-04",
          "category": "Training"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Arjun",
      "email": "employee4@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "new_task": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Update Sales Data",
          "description": "Enter recent sales data into the system",
          "date": "2024-10-30",
          "category": "Sales"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Inventory Check",
          "description": "Verify inventory levels in warehouse",
          "date": "2024-11-01",
          "category": "Operations"
        },
        {
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "title": "Ad Campaign",
          "description": "Launch digital ad campaign for new product",
          "date": "2024-10-31",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Neha",
      "email": "employee5@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "new_task": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Customer Survey",
          "description": "Design and distribute customer satisfaction survey",
          "date": "2024-11-02",
          "category": "Customer Service"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Competitor Analysis",
          "description": "Analyze competitor strategies and prepare a report",
          "date": "2024-10-29",
          "category": "Research"
        },
        {
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Product Feedback Collection",
          "description": "Gather feedback from customers on new product",
          "date": "2024-11-03",
          "category": "Product Development"
        }
      ]
    }
  ];
  
    const admin = [
    {
      "id": 1,
      "firstName": "Rohit",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  
  


  export  const setLocalStorage =()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));

    
  }

  
    
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };  // Ensure both properties are returned
};

  