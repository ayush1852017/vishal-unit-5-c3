import { Route, Routes } from "react-router-dom";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { EmployeeList } from "./components/EmployeeList";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route path="/admin" element={<EmployeeDetails />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/EmployeeDetails/:id"
          element={
            <authCheckComponent>
              <EmployeeDetails />
            </authCheckComponent>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
