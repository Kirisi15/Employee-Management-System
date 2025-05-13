import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../Services/EmployeeService';

const UpdateEmployee = () => {
//   const { id } = useParams(); // get employee ID from URL
  const navigate = useNavigate();
  const id=4; // used to go back to the list

  // Form state
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // Load employee data from backend
  useEffect(() => {
    getEmployeeById(id).then((res) => {
      setEmployee(res.data); // fill form with data
    });
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, employee).then(() => {
      navigate('/employees'); // go back to employee list
    });
  };

  return (
    <div className="container">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" value={employee.firstName} onChange={handleChange} placeholder="First Name" />
        <input name="lastName" value={employee.lastName} onChange={handleChange} placeholder="Last Name" />
        <input name="email" value={employee.email} onChange={handleChange} placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
