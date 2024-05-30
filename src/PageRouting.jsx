import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import TablePage from './TablePage'
import StudentPage from './StudentPage'
import LoginPage from './LoginPage'

const PageRouting = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/student" element={<TablePage/>}/>
            <Route path="/student/:name" element={<StudentPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default PageRouting
