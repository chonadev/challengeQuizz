import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import logo from '../logo.svg';
import { fetchLogin } from '../services/AuthService';

export const Login = ({setToken}) => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email : Yup.string().email('Invalid Email address').required('Required'),
      password: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    }),
    onSubmit: values => {
      const credentials = {
        email: values.email,
        password: values.password
      };
      fetchLogin(credentials).then( res => {
        if (res && res.token) {
          setToken(res);
          navigate('/');
          window.location.reload();
        }
      });
    },
  });

  return (
    <main className="w-50 m-auto">
      <form onSubmit={formik.handleSubmit}>
        <div className="text-center">
          <img alt='logo' className='mb-3' src={logo} width={72} height={72} />
          <h1 className="h3 mb-3 fw-normal"> Login </h1>
        </div>

        <div className="mb-3 form-group has-validation">
          <label htmlFor="email" className="form-label"> Email </label>
          <input
            id="email"
            className="form-control"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email 
          ? (<div className="text-danger">{formik.errors.email}</div>) 
          : null}
        </div>

        <div className="mb-3 form-group has-validation">
          <label htmlFor='password' className="form-label"> Password </label>
          <input
            id="pass"
            className="form-control"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password 
          ? (<div className="text-danger">{formik.errors.password}</div>) 
          : null}
        </div>
        
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="remembercheck" />
          <label className="form-check-label" htmlFor="remembercheck"> Remember email </label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        
        <div className="my-3 text-center">
          Are new ? <Link className="btn btn-link" to="/register"> Register </Link>
        </div>

      </form>
    </main>
  )
}
