import React, { useEffect,useState } from 'react'
import { listEmployees } from '../Services/EmployeeService'

const ListEmployeeComponent = () => {

const[employees, setEmployees] = useState([])

useEffect(() =>{
    listEmployees()
    .then((response) =>{
        setEmployees(response.data);
    }).catch(error => {
        console.log(error);
    })
},[])
  return (
    <div className='container'>
        <h2>ListEmployeeComponent</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First name</th>
                    <th>Employee Last name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr keys={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent