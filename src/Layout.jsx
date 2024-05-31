import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faList } from '@fortawesome/free-solid-svg-icons'
import "./Layout.css"


const Layout = ({children}) => {   //"cildren prop" - dynamically inserts child components into the Layout.

    const navigate=useNavigate();

    const open_menu=()=>
        {
            document.getElementById("menu").style.display="block"
            document.getElementById("side_menu").style.display="block"
            document.getElementById("line").style.display="none"
        }
    
    const close_menu=()=>
        {
            document.getElementById("menu").style.display="block"
            document.getElementById("side_menu").style.display="none"
            document.getElementById("line").style.display="block"
        }

  return (
    <div className='content'>
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/XYZ_School.png" height="50px" width="50px" className="logoimg"/>
            <h2 style={{fontFamily:"serif", paddingTop:"20px", paddingBottom:"20px", marginBottom:"0px"}}>XYZ School</h2>
        </header>
        <div className='main'>
        <div className="menu" id="menu" onClick={open_menu} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faList} size="xs"/> Menu</div>    
        <div className="side_menu" id="side_menu">
            <a href="javascript:void(0)" onClick={close_menu} style={{color:"black", marginLeft:"160px"}}><FontAwesomeIcon icon={faXmark} size="2x"/></a><br></br><br></br>
            <p onClick={()=>navigate("/student")}><text style={{cursor:"pointer", fontSize:"18px"}}>Student Registery</text></p>
            <p>Administration</p>
            <p>Programmes</p>
            <p>Academics</p>
            <p>Admission</p>
            <p>Examinations</p>
            <p>Campus Life</p>
            <p>About Us</p>
        </div>
    <div> 
        {/* children component (TablePage, StudentPage) executes here */}
        {children}  
    </div>
    </div>
    <footer>
        <hr id="line"></hr>
        <p class="footp">Connect with us: <img src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_960_720.png" height="60px" width="130px"/></p>
        <p class="footp">Contact: 9876543210 | E-mail Id: xyz@gmail.com</p>

    </footer>
    </div>
  )
} 

export default Layout

// href="javascript:void(0)" - to make the anchor element not perform any default action when clicked
// onClick={open_menu} - function is passedd as reference
// onClick={open_menu} - function is invoked immediately
