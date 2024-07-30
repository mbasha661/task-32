import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";
import './LogIn.css'


function LogIn() {
    let navigate=useNavigate()


    let handleSignin=async(e)=>{
      e.preventDefault()
      let data={
        email:e.target.email.value,
        password:e.target.password.value
      }
  
  
      try {
        let res=await axios.post(`${process.env.REACT_APP_API_URL}user/signin`,data)
        if(res.status===200){
          toast.success(res.data.message)
          sessionStorage.setItem('token',res.data.token)
          navigate('/home')
        }
      } catch (error){
       toast.error(error.response.data.error || error.response.data.message)
       
      }
  
  
    }
  return<><body className='login-page' >
<section>
    <form onSubmit={handleSignin}>
        <div className="form-box">
            <div className="form-value">
                
                    <h2>Login</h2>
                    <div className="input-box">
                    <label >Email</label><br></br>
                       
                        <input type="email" name='email'  />&nbsp;
                        <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                        
                    </div>
                    <div className="input-box">
                    <label >Password</label>
                    <br></br>
                        
                        <input type="password" name='password'  />&nbsp;
                        <span className="icon"><i className="fa-solid fa-lock"></i></span>
                        
                    </div>
                    {/* <div className="remember-forgot">
                        <label for=""><input type="checkbox" />Remember Me</label>
                        <a href="javascriptVoid">Forget Password</a>
                    </div> */}
                    <button type="submit" className="login-button" >LOGIN</button>

                    <div className="login-register">
                        <p>Don't have a account <a href="/SignUp">&nbsp;SignUp</a></p>

                    </div>
            </div>
        </div>
    </form>

    </section>

    </body>
  </>
}

export default LogIn

  


// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios'
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";





// function LogIn() {

//   let navigate=useNavigate()


  // let handleSignin=async(e)=>{
  //   e.preventDefault()
  //   let data={
  //     email:e.target.email.value,
  //     password:e.target.password.value
  //   }


// try {                                     
//   let res=await axios.post(`${process.env.REACT_APP_API_URL}user/signin`,data)
//   if(res.status===200){
//     toast.success(res.data.message)
//     sessionStorage.setItem('token',res.data.token)
//     navigate('/home')
//   }
// } catch (error){
//  toast.error(error.response.data.error || error.response.data.message)
// }


//   }

  // return<div className="container-fluid">
  // <div>
  // <Form onSubmit={handleSignin}>
        
//         <Form.Group className="mb-3" >
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" name="email" />
          
//         </Form.Group>
  
        
//         <Form.Group className="mb-3"  >
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" name="password" />
//         </Form.Group>
        
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>

//         <p>Don't have a account <a href="/SignUp">SignUp</a></p>
//       </Form>
//   </div>
  
//     </div>
  
// }

// export default LogIn;



// // LogIn.js

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function LogIn() {
//   let navigate = useNavigate();

//   let handleSignin = async (e) => {
//     e.preventDefault();
//     let data = {
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };

//     try {
//       // Use the correct API endpoint URL       
//       let res = await axios.post(`${process.env.REACT_APP_API_URL}user/signin`, data);
//       if (res.status === 200) {
//         toast.success(res.data.message);
//         sessionStorage.setItem('token', res.data.token);
//         navigate('/home');
//       }
//     } catch (error) {
//       // Log the error to the console for debugging
//       console.error(error);

//       // Display the error message
//       toast.error(error.response?.data.error || error.message);
//     }
//   };

//   return (
//     <div className="login-page">
//       <body>
//         <section>
//           <form onSubmit={handleSignin}>
//             <div className="form-box">
//               <div className="form-value">
//                 <h2>Login</h2>
//                 <div className="input-box">
//                   <span className="icon">
//                     <i className="fa-regular fa-envelope"></i>
//                   </span>
//                   <input type="email" name="email" />
//                   <label>Email</label>
//                 </div>
//                 <div className="input-box">
//                   <span className="icon">
//                     <i className="fa-solid fa-lock"></i>
//                   </span>
//                   <input type="password" name="password" />
//                   <label>Password</label>
//                 </div>
//                 <button type="submit" className="login-button">
//                   LOGIN
//                 </button>
//                 <div className="login-register">
//                   <p>
//                     Don't have an account <a href="/SignUp">SignUp</a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </section>
//       </body>
//     </div>
//   );
// }

// export default LogIn;
