import React from 'react'
// import { useForm } from 'react-hook-form';
import './Loginform.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Avatar, Typography ,Link} from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';



const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
//     confirmpassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Password must match')
//       .required('Confirm Password is required'),
//     mobile: Yup.string()
//       .required('Mobile number is required')
//       .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
 });

  export default function Loginform() {
    const Navigate = useNavigate()
    const onSubmit = async (values) => {
      try {
        const url = `https://6594e34f04335332df819ddb.mockapi.io/employee/login?email=${values.email}&password=${values.password}`;
        const response = await axios.get(url);
        console.log(response.data);
        // Navigate('/Home');
      } catch (error) {
        console.error('Login failed:', error);
      }
    };
    // const onSubmit = (values) => {
    //   console.log(values);
    //   Navigate('/Home')
    // }
    let Hii =()=>{
       Navigate('/Registerform')
    }

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
        <div className="register1">
        <div className="col-1">
            <img src='image/ATS1.jpg' alt="ATS" />
          </div>
          <div className="col-2">
            <div>
            <Avatar src='image/ATS2.jpg' className='avatar'/>
            </div>
            <h2>Login</h2>
            <Formik
              initialValues={{
                email: '',
                password: '',
                // confirmpassword: '',
                // mobile: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form id="form" className="flex flex-col">
                <Field type="text" name="email" placeholder="email" />
                <ErrorMessage name="email" component="div" className='error'/>
  
                <Field  type="password" name="password" placeholder="password" />
                <ErrorMessage name="password" component="div"className='error' />
                <Typography className='CC'>
                  <Link  underline="none" style={{fontSize:"15px"}}>
                    Reset password
                  </Link>
                </Typography>
  
                {/* <Field
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
                <ErrorMessage name="mobile" component="div" className='error' /> */}
  
                <button className="btn" type="Login">
                  Login
                </button>
                <Typography style={{textAlign:"right", fontSize:"15px"}}> Do you have an account?
                  <Link onClick={Hii}>
                     Register
                  </Link>
                </Typography> 
              </Form>
            </Formik>
          </div>
          </div>
      </section>
    );
  }
  


