import React from 'react'
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate=useNavigate()

    const handle_submit=(e)=>
        {
            e.preventDefault()
            navigate("/student")
        }

  return (
    <div class="entire">
        <div>
            <img src='https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png?f=webp' alt="signin" width="400px" height="400px" class="loginimg"/></div>
        <div><fieldset>
                <b><h3>Welcome Back!</h3><br></br></b>
                <form onSubmit={handle_submit}>
                <label class="labels">Username:</label><br></br>
                <input type="text" id="user" name="user" placeholder="User Name" class="textbox" required/><br></br><br></br>
                <label class="labels">Password:</label><br></br>
                <input type="password" id="pwd" name="pwd" placeholder="Password" maxlength="8" class="textbox" required/><br></br>
                <a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop" class="fp">Forgot Password?</a><br></br><br></br>
                <button class="b1" type="submit">Login</button><br></br>
                <center><a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">Sign up</a></center>
                </form>
        </fieldset></div>
    </div>
  )
}

export default LoginPage

