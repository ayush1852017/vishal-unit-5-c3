import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      setEmployee(data);
    });
  }, []);

  // console.log(employee);

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {employee.map((elem) => {
        // console.log(elem);
        return (
          <div className="employee_card">
            <Link to={`./EmployeeDetails/${elem.id}`}>
              <img className="employee_image" src={elem.image} />
              <h3 className="employee_name">{elem.employee_name}</h3>
              <div className="employee_title">{elem.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
