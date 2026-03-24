import React from 'react'
import "./Login.css"
function Login({ setloginopen }) {
  return (
    <div className='loginslar' onClick={() => setloginopen(false)} >
   <div className="login_data" onClick={(e) => e.stopPropagation()} >
    <div className="rowregister_login">
            <h1>Login</h1> | <h1>Register</h1>

        </div>
        <h2 className='enetredat'>Enter your username and password to login.</h2>
        <input className='emailinput' type="email" placeholder='almamun_uxui@outlook.com'/>
        <input className='paswordinput' type="password" placeholder='***********' />
        <h4 className='forgotpasword'>Forgot Password?</h4>
        <button className='login_button'>Login</button>
        <h5 className='loginwitgh'>----------------Or login with----------------</h5>
        <button className='imgwithgoogle'> <img src="/imgs/google 1.svg" alt="" /> Login with Google</button>
        <button className='imgwithfacebook'>  <img src="/imgs/facebook 1.svg" alt="" /> Login with Facebook</button>
        <button className='closeopen' onClick={()=>{
            setloginopen(false)
        }}>Back Page</button>

   </div>
        
    </div>
  )
}

export default Login