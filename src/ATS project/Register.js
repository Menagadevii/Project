import React from 'react'
import reg from'../Assets/reg.jpg';
// import { useForm } from 'react-hook-form';
import './Register.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Avatar } from '@mui/material';
import axios from 'axios';


const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm Password is required'),
    mobile: Yup.string()
      .required('Mobile number is required')
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  });

  export default function Register() {
    // const onSubmit = (values) => {
    //   console.log(values);
    // };

    const onSubmit = async (values) => {
        try {
          const response = await axios.post('https://6594e34f04335332df819ddb.mockapi.io/employee', values);
          console.log(response.data);
        } catch (error) {
          console.error('API call error:', error);
        }
      };
  
    return (
      <section>
        <div className="register">
          <div className="col-1">
            <div className='AA'>
            <Avatar src='image/book.webp' className='avatar'  />
             ATS
            </div>
            <h2>Register</h2>
            <Formik
              initialValues={{
                username: '',
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
          <div className="col-2">
            <img src={reg} alt="register" />
          </div>
        </div>
      </section>
    );
  }
  


// export default function Register() {

//     const { register, handleSubmit, watch, formState: { errors } } = useForm()
//     const onSubmit = data => console.log(data);
    
//     console.log(watch('username'));
    
//   return (
//     <section>
//         <div className="register">
//             <div className="col-1">
//                 <h2>Register</h2>
//                 {/* <span>Register and enjoy the service</span> */}

//                 <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} >
//                     <input type="text" {...register("username")} placeholder='username' />
//                     <input type="password" {...register("password")} placeholder='password' />
//                     <input type="password" {...register("confirmpassword",{ required : true})} placeholder='confirm password' />
//                     {errors.confirmpassword?.type === "required" && "password is required"}
//                     <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
//                     {errors.mobile?.type === "required" && "must be 10 digits!"}
//                     {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
//                     <button className='btn'>Submit</button>
//                 </form>

//             </div>
//             <div className="col-2">
//                 <img src={reg} alt="regsiter" />
//             </div>
//         </div>
//     </section>
//   )
// }