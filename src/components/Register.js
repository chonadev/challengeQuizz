import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import logo from '../logo.svg';

export const Register = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max( 20, 'Must be 20 characters or less')
        .required('Required'),
      email : Yup.string()
        .email('Invalid Email address')
        .required('Required'),
      password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <main className="w-50 m-auto">
      <form onSubmit={formik.handleSubmit}>
        <div className="text-center">
          <img alt='logo' className='mb-3' src={logo} width={72} height={72} />
          <h1 className="h3 mb-3 fw-normal"> Register </h1>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="firstName" className="form-label"> First Name </label>
          <input
            id="firstName_register"
            className='form-control'
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName 
          ? (<div className="text-danger">{formik.errors.firstName}</div>) 
          : null}
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="email" className="form-label"> Email </label>
          <input
            id="email_register"
            className='form-control'
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email 
          ? (<div className="text-danger">{formik.errors.email}</div>) 
          : null}
        </div>

        <div className="mb-3 form-group">
          <label htmlFor='password' className="form-label"> Password </label>
          <input
            id="pass_register"
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
        
        <button type="submit" className="btn btn-primary btn-lg"> Register </button>
      </form>
    </main>
  )
}
