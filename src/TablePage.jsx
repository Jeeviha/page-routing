import React from 'react'
import {useNavigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const TablePage = () => {
  
  const navigate=useNavigate()

  return (
    <div>
      <h3 style={{fontFamily:"serif", marginTop:"20px"}}>Student Registery</h3>
    <div className="container mt-5">
      <div className="row justify-content-center">
      <div className="col-md-3">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th colSpan="2">Student Details</th>
          </tr>
          <tr>
            <th>Reg No.</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td><text onClick={()=>navigate("/student/Angi")} style={{cursor:"pointer"}}>Angi</text></td>
          </tr>
          <tr>
            <td>102</td>
            <td><text onClick={()=>navigate("/student/Dharr")} style={{cursor:"pointer"}}>Dharr</text></td>
          </tr>
          <tr>
            <td>103</td>
            <td><text onClick={()=>navigate("/student/Guru")} style={{cursor:"pointer"}}>Guru</text></td>
          </tr>
          <tr>
            <td>104</td>
            <td><text onClick={()=>navigate("/student/Jack")} style={{cursor:"pointer"}}>Jack</text></td>
          </tr>
          <tr>
            <td>105</td>
            <td><text onClick={()=>navigate("/student/Sam")} style={{cursor:"pointer"}}>Sam</text></td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>
    </div>
  )
}

export default TablePage
