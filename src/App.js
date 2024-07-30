import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import CreateBlog from "./Components/CreateBlog";
import ManageBlogs from "./Components/ManageBlogs";
import Home from "./Components/Home";
import EditBlog from "./Components/EditBlog";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import PrivateRoutes from "./Pri-Route/PrivateRoutes";
export const API_URL = "https://64c0b8b20d8e251fd112700c.mockapi.io/blogs"//for use common to all
function App() {
  return <>
  <BrowserRouter>
  <div>
    <NavBar/>
  </div>
  <div className="container-fluid">
  
    <Routes>
    <Route element={<PrivateRoutes/>}>
    <Route path="*" element= {<Navigate to="login"/>} />
    
      <Route path="/home" element={<Home/>}/>
      <Route path="/manage" element={<ManageBlogs/>}/>
      <Route path="/create" element={<CreateBlog/>}/>
      <Route path="/edit/:id" element={<EditBlog/>}/>
      </Route>
      <Route path="/login" element={<LogIn />} />
    <Route path="/signup" element={<SignUp />} />

    </Routes>
   
  </div>
  </BrowserRouter>
  </>
}

export default App;
