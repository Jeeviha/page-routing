import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import TablePage from './TablePage'
import StudentPage from './StudentPage'
import LoginPage from './LoginPage'
import Layout from './Layout'

const PageRouting = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/student" element={<Layout><TablePage/></Layout>}/>
            <Route path="/student/:name" element={<Layout><StudentPage/></Layout>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default PageRouting
