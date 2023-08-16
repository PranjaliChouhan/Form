
import './App.css';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const handleSubmit = (values, { setSubmitting }) => {
    // Combine first name and last name before logging
    const fullName = `${values.firstName} ${values.lastName}`;
    console.log(fullName);
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='outer-container'>
      <h2>Exam Registration Form</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          dob: null,
          gender: '',
          address: {
            street1: '',
            street2: '',
            city: '',
            region: '',
            postalCode: '',
            country: '', // Initialize country as empty string
          },
          percentage: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className='name'>
              <p>NAME</p>

              <div>
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component="div" className="error" />

                <label htmlFor="lastName" className="lastname">Last Name:</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component="div" className="error" />
              </div>
            </div>

            <div className='DOB'>
              <p>Date of Birth</p>
              <DatePicker
                id="dob"
                className="dob"
                selected={values.dob}
                onChange={date => setFieldValue('dob', date)}
                dateFormat="MM/dd/yyyy"
                showYearDropdown
                yearDropdownItemNumber={15}
              />
              <ErrorMessage name="dob" component="div" className="error" />
            </div>

            <div>
              <p>Gender</p>
              <Field as="select" id="gender" name="gender" className="gender">
                <option value="" label="Select Gender" />
                <option value="male" label="Male" />
                <option value="female" label="Female" />
              </Field>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

            <div className='home'>
  <p>Home</p>
  <div className="address-fields">
    <div>
      
      <Field type='text' id="street1" name="address.street1" placeholder="Street address" />
      <ErrorMessage name="address.street1" component="div" className="error" />
   </div>
   <div>
      <Field type='text' id="street2" name="address.street2" placeholder="Street address line 2" />
      <ErrorMessage name="address.street2" component="div" className="error" />
    </div>
  </div>
  <div className='home-container'>
  <div className='home-inside1'>
    <div>
     
      <Field type='text' id="city" name="address.city" placeholder="City"  className="address"/>
      <ErrorMessage name="address.city" component="div" className="error" />
   
      
      <Field type='text' id="region" name="address.region" placeholder="Region" className="address" />
      <ErrorMessage name="address.region" component="div" className="error" />
    </div>
  </div>
  <div className='home-inside2'>
    <div>
      
      <Field type='number' id="postalCode" name="address.postalCode" placeholder="Zip/postal-code" className="address"  />
      <ErrorMessage name="address.postalCode" component="div" className="error" />
  
               
                <Field as="select" id="country" name="address.country" className="country" >
                  <option value="" label="Select Country" />
                  <option value="usa" label="USA" />
                  <option value="India" label="India" />
                  <option value="canada" label="Canada" />
                  <option value="China" label="China" />
                  <option value="Austria" label="Austria" />
                  <option value="Brazil" label="Brazil" />
                  <option value="Poland" label="Poland" />
                
                </Field>
                <ErrorMessage name="address.country" component="div" className="error" />
              </div>
            </div>
            </div>
          </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
