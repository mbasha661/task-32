import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../App';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function Home() {
  let [blogs, setBlogs] = useState([])
  let getData = async () => {

    try {
      let res = await axios.get(`${API_URL}`)
      if (res.status === 200) {
        let newBlogs = res?.data?.filter((e) => e.active_flag)
        const latestBlog=newBlogs.reverse()
        setBlogs(latestBlog)
      }
    } catch (error) {
      alert(error)
    }

  }
  useEffect(() => {
    getData()
   }, [])
  return <>
    <div className="home-wraper">
      <h2 className="home-title">Latest Blogs</h2>
      {blogs.map((e, i) => {
        return <BlogItem blog={e} key={i} />
      })}
    </div>
  </>
}

export default Home

function  BlogItem({blog}){
  return <div className="blog-wraper">

<div className="blog-title">{blog.title}</div>
<img src={blog.imagUrl} className="blog-image" alt=''/>
<div className="blog-description">{blog.description}</div>

  </div>
  
}