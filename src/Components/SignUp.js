import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";
import './SignUp.css'


function SignUp() {

  let navigate=useNavigate()

  let handleSignup=async(e)=>{
    e.preventDefault()
    let data={
      name:e.target.name.value,
      email:e.target.email.value,
      mobile:e.target.mobile.value,
      password:e.target.password.value
    }


try {
  let res=await axios.post(`${process.env.REACT_APP_API_URL}user/signup`,data)
  if(res.status===200){
    toast.success(res.data.message)
    navigate('/login')
  }
} catch (error){
 toast.error(error.response.data.error || error.response.data.message)
}


  }
  return <div className='signup-page'>
  
  <section onSubmit={handleSignup}>
          <div className="form-box">
            <div className="form-value">
              <form id="form">
                <h2>SignUp</h2>

                <div className="input-box">
                  <span className="icon"><i class="fa-solid fa-pen"></i></span>
                  <input type="text" id="name" name="name" />
                  <label >name</label>
                  <div className="error"></div>
                </div>

                <div className="input-box">
                  <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                  <input type="email" id="email" name="email" />
                  <label >Email</label>
                  <div className="error"></div>
                </div>

                <div className="input-box">
                  <span className="icon"><i class="fa-solid fa-phone"></i></span>
                  <input type="text" id="mobile" name="mobile" />
                  <label >mobile</label>
                  <div className="error"></div>
                </div>

                <div className="input-box">
                  <span className="icon"><i className="fa-solid fa-lock"></i></span>
                  <input type="password" id="password" name="password" />
                  <label >Password</label>
                  <div className="error" ></div>
                </div>                

                <button type="submit" className="button-for-signup" >SignUp</button>
                <div className="login-register">
                  <p>Don't have an account <a href="/LogIn">login</a></p>
                </div>
              </form>
            </div>
          </div>
        </section>

  </div>
}

export default SignUp



// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios'
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function SignUp() {
//   let navigate=useNavigate()

//   let handleSignup=async(e)=>{
//     e.preventDefault()
//     let data={
//       name:e.target.name.value,
//       email:e.target.email.value,
//       mobile:e.target.mobile.value,
//       password:e.target.password.value
//     }


// try {
//   let res=await axios.post(`${process.env.REACT_APP_API_URL}user/signup`,data)
//   if(res.status===200){
//     toast.success(res.data.message)
//     navigate('/sign-in')
//   }
// } catch (error){
//  toast.error(error.response.data.error || error.response.data.message)
// }


//   }


//   return<div className="container-fluid">
// <div>
// <Form onSubmit={handleSignup}>
//       <Form.Group className="mb-3" >
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter name" name="name" />
        
//       </Form.Group>
//       <Form.Group className="mb-3" >
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" name="email" />
        
//       </Form.Group>

//       <Form.Group className="mb-3" >
//         <Form.Label>Mobile</Form.Label>
//         <Form.Control type="text" placeholder="Enter mobile number" name="mobile" />
        
//       </Form.Group>

//       <Form.Group className="mb-3"  >
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" name="password" />
//       </Form.Group>
      
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
// </div>

//   </div>
  
// }

// export default SignUp;
