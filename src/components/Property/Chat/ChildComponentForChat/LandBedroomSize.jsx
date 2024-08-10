import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LandBedroomSize = ({ userinputValues, setinputfeildvalue, NextQuestion }) => {
  const [buttonShow, setButtonShow] = useState(false);

  const initialValues = Array.from({ length: userinputValues }).reduce((acc, _, index) => {
    return {
      ...acc,
      [`Height ${index + 1}`]: '',
      [`Width ${index + 1}`]: ''
    };
  }, {});

  const validationSchema = Yup.object().shape(
    Array.from({ length: userinputValues }).reduce((acc, _, index) => {
      return {
        ...acc,
        [`Height ${index + 1}`]: Yup.number().typeError('Must be a number').required('Required'),
        [`Width ${index + 1}`]: Yup.number().typeError('Must be a number').required('Required')
      };
    }, {})
  );

  const handleSubmit = (values, { setSubmitting }) => {
    const formattedValues = Array.from({ length: userinputValues }).map((_, index) => ({
      [`bedroom${index + 1}`]: {height: values[`Height ${index + 1}`],
       width: values[`Width ${index + 1}`]}
     }));
   
     setinputfeildvalue(prevState => ({
       ...prevState,
       bedroom_size: formattedValues
     }));
   
     NextQuestion();
     setSubmitting(false);
  };
  
  const validateForm = (values) => {
    const allFieldsFilled = Object.values(values).every(value => value !== '');
    setButtonShow(allFieldsFilled);
  };

  return (
    userinputValues ? (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                {Array.from({ length: userinputValues }).map((_, index) => (
                  <div key={index} style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '10px' }}>{`Bedroom ${index + 1}`}</div>
                    <div>
                      <Field
                        style={{ width: '100px', margin: '5px' }}
                        type="text"
                        name={`Height ${index + 1}`}
                        placeholder="Height"
                      />
                      <ErrorMessage name={`Height ${index + 1}`} component="div" className="error" />
                    </div>
                    <div>
                      <Field
                        style={{ width: '100px', margin: '5px' }}
                        type="text"
                        name={`Width ${index + 1}`}
                        placeholder="Width"
                      />
                      <ErrorMessage name={`Width ${index + 1}`} component="div" className="error" />
                    </div>
                  </div>
                ))}
              </div>
              {buttonShow && (
                <button type="submit" className="btn bg-info" disabled={isSubmitting} style={{ justifyContent: 'center', marginTop: '20px' }}>
                  {isSubmitting ? 'Saving...' : 'Save'}
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    ) : null
  );
};

export default LandBedroomSize;
