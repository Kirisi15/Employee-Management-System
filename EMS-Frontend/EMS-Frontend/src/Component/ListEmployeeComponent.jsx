import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee} from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate(); // To navigate between routes

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAdd = () => {
    navigate('/add-employee');
    
  };
  
  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  const handleDelete = (id) => {
    deleteEmployee(id)
        .then(() =>{
            setEmployees(employees.filter((emp) => emp.id !== id));
            window.alert("Employee deleted successfully");
            })
            .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <h2>List of Employees</h2>
      <button className="btn btn-primary" onClick={handleAdd}>
        Add Employee
      </button>
      <br />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th> {/* New column for buttons */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(employee.id)}>
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
