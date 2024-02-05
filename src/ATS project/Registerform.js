import React from 'react'
// import { useForm } from 'react-hook-form';
import './Registerform.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Avatar } from '@mui/material';
// import axios from 'axios';


const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm Password is required'),
    mobile: Yup.string()
      .required('Mobile number is required')
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  });

  export default function Registerform() {
    const onSubmit = (values) => {
      console.log(values);
    };

    // const onSubmit = async (values) => {
    //     try {
    //       const response = await axios.post('https://6594e34f04335332df819ddb.mockapi.io/employee', values);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error('API call error:', error);
    //     }
    //   };
  
    return (
      <section>
        <div className="register">
        <div className="col-1">
            <img src='image/ATS1.jpg' alt="ATS" />
          </div>
          <div className="col-2">
            <div className='AA'>
            <Avatar src='image/ATS2.jpg' className='avatar'  />
            </div>
            <h2>Register</h2>
            <Formik
              initialValues={{
                username: '',
                email: '',
                password: '',
                confirmpassword: '',
                mobile: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form id="form" className="flex flex-col">
                <Field type="text" name="username" placeholder="username" />
                <ErrorMessage name="username" component="div" className='error'/>

                <Field type="text" name="email" placeholder="email" />
                <ErrorMessage name="email" component="div" className='error'/>
  
                <Field  type="password" name="password" placeholder="password" />
                <ErrorMessage name="password" component="div"className='error' />
  
                <Field
                  type="password"
                  name="confirmpassword"
                  placeholder="confirm password"
                />
                <ErrorMessage name="confirmpassword" component="div"className='error' />
  
                <Field
                  type="text"
                  name="mobile"
                  placeholder="mobile number"
                />
                <ErrorMessage name="mobile" component="div" className='error' />
  
                <button className="btn" type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    );
  }
  


