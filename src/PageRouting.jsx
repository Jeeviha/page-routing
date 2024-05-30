import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import TablePage from './TablePage'
import StudentPage from './StudentPage'

const PageRouting = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<TablePage/>}/>
            <Route path="/student/:name" element={<StudentPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default PageRouting
