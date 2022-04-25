import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const { id } = useParams();

  const [eData, setEData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/employee`).then(({ data }) => {
      data.data.map((elem) => {
        if (elem.id == id) {
          return setEData(elem);
        }
      });
    });
  });

  console.log(eData);

  return (
      // {eData.map((x) => {
      // })}
    <div className="user_details">
        
      <img className="user_image" />
      <h4 className="user_name"></h4>
      <span className="user_salary">$</span>
      <span className="tasks">
        <li className="task"></li>
      </span>
      Status: <b className="status"></b>
      Title: <b className="title"></b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
