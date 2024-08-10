import * as Yup from 'yup';

const validationSchema = [
  Yup.object({
    Q1: Yup.string()
      .required('City Name is required')
      .matches(/^[A-Za-z\s]+$/, 'City must only contain alphabetic characters'),
  }),
  Yup.object({
    Q2: Yup.string()
      .required('Enter Number of society')
      .matches(/^[A-Za-z\s]+$/,'Society number must only contain alphabetic characters'),
  }),
  Yup.object({
    Q3: Yup.string()
      .required('Enter Your Locality')
      .matches(/^[A-Za-z\s]+$/, 'Locality must only contain alphabetic characters'),
  }),
  Yup.object({
    Q4: Yup.string()
      .required('Enter Your Area')
      .matches(/^[A-Za-z\s]+$/, 'Area must only contain alphabetic characters'),
  }),
  Yup.object({
    Q5: Yup.string()
      .required('Enter Your Address')
      .matches(/^[a-zA-Z0-9\s,\/]+$/, 'Address must be alphanumeric'),
  }),
  Yup.object({
    Q6: Yup.number()
      .required('Enter Your Bedrooms')
      .typeError('Bedrooms must only contain numeric characters'),
  }),
  Yup.object({
    Q7: Yup.number()
      .required('Balconies number is required')
      .typeError('Balconies must only contain numeric characters'),
  }),
  Yup.object({
    Q8: Yup.number()
      .required('Floor number is required')
      .typeError('Floor must only contain numeric characters'),
  }),
  Yup.object({
    Q9: Yup.number()
      .required('Total Floor is required')
      .typeError('Total Floor must only contain numeric characters'),
  }),
  Yup.object({
    Q10: Yup.number()
      .required('Bathroom Number is required')
      .typeError('Bathroom must only contain numeric characters'),
  }),
  Yup.object({
    Q11: Yup.number()
      .required('kitchen Number is required')
      .typeError('Kitchen must only contain numeric characters'),
  }),
  Yup.object({
    Q12: Yup.number()
      .required('Expected Price is required')
      .typeError('Expected Price must only contain numeric characters'),
  }),
  Yup.object({
    Q13: Yup.number()
      .required('Booking Price is required')
      .typeError('Booking Price must only contain numeric characters'),
  }),
  Yup.object({
    Q14: Yup.number()
      .required('Carpet Area is required')
      .typeError('Carpet Area must only contain numeric characters'),
  }),
  Yup.object({
    Q15: Yup.number()
      .required('Super Area is required')
      .typeError('Super Area must only contain numeric characters'),
  }),
  Yup.object({
    Q16: Yup.string()
      .required('Developer Details is required')
      .matches(/^[A-Za-z\s.,'-]+$/, 'Developer Details only contain alphabetic characters and certain special characters')

  }),
  Yup.object({
    Q17: Yup.string()
      .required('Project Details is required')
      .matches(/^[A-Za-z\s.,'-]+$/, 'Project Details only contain alphabetic characters and certain special characters')

  }),
  Yup.object({
    Q18: Yup.number()
    .required('Age of Construction is required')
    .typeError('Age of Construction must only contain numeric characters'),
  }),
  Yup.object({
    Q19:  Yup.string()
    .required("Available Date is required")
    .matches(/^\d{2}-\d{2}-\d{4}$/, "Date must be in the format DD-MM-YYYY"),
  }),
];

export default validationSchema;
