import React ,{useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  let [count,setCount]=useState(0)
  const totalCount=400;
  let navigate=useNavigate()
  let createBlog = async (data)=>{
    try {
      let res = await axios.post(API_URL,data)
      if(res.status===201 || res.status===200){
        toast.success('Blog Saved Successfully')
        navigate('/manage')
      }
    } catch (error) {
      toast.error(error.message)
      
    }
  }
//create kku- status===201.

  const formik = useFormik({
    initialValues: {
      title: '',
      imagUrl: '',
      description: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().min(2, 'Too Short').max(24, 'Too Long').required('Reiquired'),
      imagUrl: Yup.string().required('required').matches(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, 'must be Url'),
      description: Yup.string().min(100, 'Min 100 Charecters Expected').max(totalCount, 'Too Long').required('Required')
    }),
    onSubmit: values => {
      
      values.active_flag = false
      createBlog(values)//handleSummit called from this  part.
    }


  })

  return <div className="main-content">

    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id='title'
            name='title'
            placeholder="Enter title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title} />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}

        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control
            type="text"
            id='imagUrl'
            name='imagUrl'
            placeholder="imagUrl"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imagUrl} />
          {formik.touched.imagUrl && formik.errors.imagUrl ? (
            <div className="error">{formik.errors.imagUrl}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            id='description'
            name='description'
            placeholder="description"
            onChange={formik.handleChange}
            onKeyUp={(e)=>setCount(e.target.value.length)}
            onBlur={formik.handleBlur}
            value={formik.values.description} />
            <Form.Text>{count} of {totalCount} characters </Form.Text>
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
    </div>

  </div>
}

export default CreateBlog