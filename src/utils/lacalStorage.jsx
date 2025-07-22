

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123",
    firstName: "Admin"
  }
];

const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      complete: 2,
      field: 1
    },
    tasks: [
      { id: 101, title: "Setup Project Repo", description: "Initialize GitHub repository and add README.md", date: "2025-07-10", category: "Development", active: true, newTask: true, complete: false, field: false },
      { id: 102, title: "Design Login Page", description: "Create basic design for login page using Figma", date: "2025-07-12", category: "Design", active: false, newTask: false, complete: true, field: false },
      { id: 103, title: "Write Unit Tests", description: "Add unit tests for authentication module", date: "2025-07-15", category: "Testing", active: true, newTask: false, complete: false, field: true },
      { id: 104, title: "Fix Navbar Bug", description: "Resolve navbar not collapsing on mobile", date: "2025-07-18", category: "Development", active: false, newTask: false, complete: true, field: false }
    ]
  },
  {
    id: 2,
    firstName: "Alice",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      complete: 1,
      field: 1
    },
    tasks: [
      { id: 201, title: "Implement Dark Mode", description: "Add dark mode toggle using Tailwind CSS", date: "2025-07-11", category: "Development", active: true, newTask: true, complete: false, field: false },
      { id: 202, title: "Header Animation", description: "Add fade-in animation to page header", date: "2025-07-13", category: "Design", active: false, newTask: false, complete: true, field: false },
      { id: 203, title: "Validate Form Fields", description: "Add client-side validation to forms", date: "2025-07-16", category: "Development", active: true, newTask: false, complete: false, field: true }
    ]
  },
  {
    id: 3,
    firstName: "David",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      complete: 2,
      field: 1
    },
    tasks: [
      { id: 301, title: "API Integration", description: "Connect frontend with user API", date: "2025-07-09", category: "Development", active: true, newTask: true, complete: false, field: false },
      { id: 302, title: "Create Footer", description: "Design and implement responsive footer", date: "2025-07-12", category: "Design", active: false, newTask: false, complete: true, field: false },
      { id: 303, title: "Add Loader Component", description: "Show loader while fetching data", date: "2025-07-14", category: "Development", active: true, newTask: false, complete: false, field: false },
      { id: 304, title: "Unit Test Components", description: "Write unit tests for UI components", date: "2025-07-17", category: "Testing", active: false, newTask: false, complete: true, field: true }
    ]
  },
  {
    id: 4,
    firstName: "Emma",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      complete: 1,
      field: 1
    },
    tasks: [
      { id: 401, title: "Landing Page Design", description: "Create initial mockup for landing page", date: "2025-07-08", category: "Design", active: true, newTask: true, complete: false, field: false },
      { id: 402, title: "Connect Database", description: "Setup database connection with backend", date: "2025-07-13", category: "Development", active: false, newTask: false, complete: true, field: false },
      { id: 403, title: "Bug Fix: Carousel", description: "Fix issue where carousel stops looping", date: "2025-07-15", category: "Development", active: true, newTask: false, complete: false, field: true }
    ]
  },
  {
    id: 5,
    firstName: "Sophia",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      complete: 2,
      field: 1
    },
    tasks: [
      { id: 501, title: "Optimize Images", description: "Compress and optimize site images", date: "2025-07-09", category: "Development", active: true, newTask: true, complete: false, field: false },
      { id: 502, title: "Write Docs", description: "Prepare user documentation", date: "2025-07-11", category: "Documentation", active: false, newTask: false, complete: true, field: false },
      { id: 503, title: "Accessibility Check", description: "Ensure app meets accessibility standards", date: "2025-07-13", category: "Testing", active: true, newTask: false, complete: false, field: true },
      { id: 504, title: "Refactor Styles", description: "Clean up and modularize CSS files", date: "2025-07-16", category: "Development", active: false, newTask: false, complete: true, field: false },
      { id: 505, title: "Add Search Feature", description: "Implement search functionality on dashboard", date: "2025-07-18", category: "Development", active: true, newTask: true, complete: false, field: false }
    ]
  }
];





export const getLocalStorage=()=>{
  const employees= JSON.parse(localStorage.getItem('employees'));
  const admin= JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
  
}


export const setLocalStorage=()=>{
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}



export {employees, admin};
















