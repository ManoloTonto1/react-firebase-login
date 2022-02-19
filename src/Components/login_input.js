import React from 'react'


const Login_input = (props) => {
  
  return (

    <div className='login-input-container'>
            <span className='login-label'>{props.label}</span>
            <input ref={props.reff} className='login-input' type={props.type} id={props.id}/>
        </div>
  )
}

export default Login_input