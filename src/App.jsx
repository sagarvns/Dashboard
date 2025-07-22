
import "./App.css";
import EmployeeDashboard from "../src/components/Dashboard/EmployeeDashBoard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Login from "./components/Auth/Login";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage } from "./utils/lacalStorage";

function App() {
  const [user, setUser] = useState(null);
  const AuthData = useContext(AuthContext);


  useEffect(() => {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    if (loggedInUserString) {
      const loggedInUser = JSON.parse(loggedInUserString);
      setUser(loggedInUser.role);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const loggedInUserString = localStorage.getItem("loggedInUser");
      if (loggedInUserString) {
        const loggedInUser = JSON.parse(loggedInUserString);
        setUser(loggedInUser.role);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogin = (email, password) => {
  
    const { employees, admin } = AuthData || getLocalStorage();
    
    // Check admin
    const adminUser = admin?.find(a => a.email === email && a.password === password);
    if (adminUser) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: adminUser }));
      return;
    }

    // Check employee
    const employee = employees?.find(emp => emp.email === email && emp.password === password);
    if (employee) {
      setUser("user");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "user", data: employee }));
      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "user" && <EmployeeDashboard />}
    </>
  );
}

export default App;