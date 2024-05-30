import React from 'react'
import { useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const StudentPage = () => {
  const students=
    {
      "Angi":{"reg_no":101,"name":"Angi","Dept":"B COm","dob":"27-03-2005","address":"Chennai",},
      "Dharr":{"reg_no":102,"name":"Dharr","Dept":"Bsc CS","dob":"11-03-2005","address":"Viluppuram",},
      "Guru":{"reg_no":103,"name":"Guru","Dept":"Bsc Maths","dob":"23-03-2005","address":"Thirunelveli",},
      "Jack":{"reg_no":104,"name":"Jack","Dept":"BCA","dob":"21-07-2005","address":"Namakkal",},
      "Sam":{"reg_no":105,"name":"Sam","Dept":"BCA","dob":"09-12-2005","address":"Thrichy",}
    }
  const {name}=useParams();   //extracts Student name from url

  const std_details=students[name]

  return (
    <div>
      <h3 style={{fontFamily:"serif", marginTop:"20px"}}>Student Details</h3><br></br>
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-3">
      <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th>Fields</th>
          <th>Values</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Register Number</td>
          <td>{std_details.reg_no}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{std_details.name}</td>
        </tr>
        <tr>
          <td>Department</td>
          <td>{std_details.Dept}</td>
        </tr>
        <tr>
          <td>DOB</td>
          <td>{std_details.dob}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{std_details.address}</td>
        </tr>
        </tbody>
      </table>
      </div>
      </div>
      </div>
    </div>
  )
}

export default StudentPage
