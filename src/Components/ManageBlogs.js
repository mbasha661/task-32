import React from 'react';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../App';
import axios from 'axios';
import {toast } from 'react-toastify';
import CheckBox from './Common/CheckBox';


function ManageBlogs() {
  let [blogs, setBlogs] = useState([])

  let getData = async ()=>{

    // let  res = await fetch(`${API_URL}`)
    // let  data =  await res.json()
    // setBlogs(data)

    try {
      let res = await axios.get(`${API_URL}`)
      if (res.status === 200) {
        setBlogs(res.data)
        toast.success("Blogs Fetched successfully") //Its needed uncomment this
      }
    } catch (error) {
      alert(error)
    }

  }


  let handleDelete = async(id)=>{
    try {
      let res = await axios.delete(`${API_URL}/${id}`)
      if (res.status === 200) {

        getData()
      }
    } catch (error) {
      alert(error)
    }
  }

  let handleStatusChange = async(id,status)=>{
    try{
      let res = await axios.put(`${API_URL}/${id}`,{
      active_flag:status})
      if (res.status===200){
        getData()
      }
    } catch (error){
      alert(error)}
    }
  

  useEffect(() => {
    getData()
  }, [])



  return <div className="main-content">
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th style={{ width: "3%" }}>#</th>
          <th style={{ width: "15%" }}>Title</th>
          <th style={{ width: "20%" }}>Description</th>
          <th style={{ width: "10%" }}>Image</th>
          <th style={{ width: "10%" }}>Status</th>
          <th style={{ width: "10%" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((e) => {
          return <tr key={e.id} style={{ verticalAlign: "middle" }}>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus pariatur laboriosam fugiat quidem odio totam in earum reiciendis, ipsa sunt tempore. Accusamus, nobis ut in quibusdam laborum unde. Soluta, incidunt?</div></td>
            <td><Image imagUrl={e.imagUrl} /></td>
            <td><CheckBox id={e.id} status={e.active_flag} onStatusChange={handleStatusChange}/></td>
            <td> {<Action id={e.id} onDelete={handleDelete} />}</td>
          </tr>
        })}
      </tbody>
    </Table>
  </div>
}

export default ManageBlogs

function Image({ imagUrl }) {
  return <>

    <div style={{ textAlign: "center", width: "100%" }}>
      <img src={imagUrl} alt="BlogImage" style={{ width: "50px", height: "50px" }} />
    </div>
  </>
}



function Action({ id, onDelete }) {
  let navigate = useNavigate()

  return <>
    <i className="fa-solid fa-pencil" style={{ color: "#2f6a9e", cursor: "pointer" }}
      onClick={() => navigate(`/edit/${id}`)}></i>
    &nbsp;
    &nbsp;
    <i className="fa-solid fa-trash" style={{ color: "#de3c49", cursor: "pointer" }}
      onClick={() => onDelete(id)}></i>
  </>
}

// function CheckBox({id,status,onStatusChange}){
//   return<>
//   <label class="switch">
//   <input type="checkbox" checked={status}  onChange={()=>onStatusChange(id,!status)}/>
//   <span class="slider round"></span>
// </label>
// </>
// }