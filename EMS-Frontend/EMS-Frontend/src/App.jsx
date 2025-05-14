
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import EmployeeForm from './Component/EmployeeForm'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import UpdateEmployee from './Component/UpdateEmployee'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    // <>
    //   <EmployeeForm />
    //   <ListEmployeeComponent />
    // </>

   
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<UpdateEmployee />} />
        </Routes>
      
    
  )
}

export default App
