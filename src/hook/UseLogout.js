// // import React from 'react'
// // import { useNavigate } from 'react-router-dom'

// // function UseLogout() {
// //     let navigate=useNavigate()
// //   return ()=>{
// //    sessionStorage.clear()
// //    navigate('/login')}
  
// // }

// // export default UseLogout



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function UseLogout() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.clear();
//     navigate('/login');
//   };

//   // Return the function component with logout logic
//   return function LogoutButton() {
//     return (
//       <button className='logout-button' onClick={handleLogout}>
//         Logout
//       </button>
//     );
//   };
// }

// export default UseLogout;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function UseLogout() {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    sessionStorage.clear();
    navigate('/login');
  };

  // Return the function component with logout logic
  return function LogoutLink() {
    return (
      <a href="#" className='logout-link' onClick={handleLogout}>
        Logout
      </a>
    );
  };
}

export default UseLogout;

