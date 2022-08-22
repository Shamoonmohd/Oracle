import React, {useState, useEffect} from 'react'
import fireDb from './firebase';
import './App.css';
import Hero from './Hero';

const Login = ({email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}) => {
  
  return (
<div style={{marginTop:'100px'}}> 

<h4>Welcome to BlockOwn Login/Sign Up Page</h4>
<section className='login'>
    <div className='loginContainer'>
    
        <label>Username(email)</label>
        <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p className='errorMsg'>{emailError}</p>
        <label>Password</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p className='errorMsg'>{passwordError}</p>
        <div className='btnContainer'>
            {hasAccount ? (
                <>
                    <button onClick={handleLogin}>Sign In</button>
                    <p>Don't have a account ?<span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                </>
            ) : (
                <>
                    <button onClick={handleSignup}>Sign up</button>
                    <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                </>
            )}
        </div>

    </div>
</section>

</div>
   
  )
}

export default Login
