import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message,setMessage]= useState('')
    const navigate = useNavigate();
    function handleEmail(e) {
        setemail(e.target.value)
    }
    function handlePassword(e) {
        setpassword(e.target.value)
    }
    const handleSubmit = () => {
        if(email && password){
        navigate('/home')
        }else{
            setMessage("Please Enter Credentials")
        }
    }

  return (
    <div className="login">
        <div>
            <h1 className="heading">Sign In</h1>
            <span>New user? </span><a href="#">Create and account</a>
            <div className="login_left">
                <input type="email" name="email" required onChange={handleEmail} placeholder="Username or email" />
                <input type="password" name="password" onChange={handlePassword} placeholder="Password" />
                <div className="checking">
                    <input type="checkbox" id="remember" name="remember"/>
                    <label for="remember"> Keep me signed in</label>
                </div>
                <button onClick={handleSubmit}>Sign In</button>
            </div>
            <div class="hr-sect">Or Sign in With</div>
            <div className="socialmedia">
                <i class="fa fa-facebook"></i>
                <i class="fa fa-google"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-linkedin"></i>
            </div>
        </div>
        <div className="login_right"> 
            <img src="./bg.png"/>
        </div>
        <p style={{color:"red"}}>{message? message: ''}</p>
    </div>
  )
}

export default Login