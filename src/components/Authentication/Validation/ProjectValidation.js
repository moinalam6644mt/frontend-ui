import * as Yup from 'yup';

const ProjectValidation = [
  Yup.object({
    Proj1: Yup.string()
      .required('City Name is required')
      .matches(/^[A-Za-z\s]+$/, 'City must only contain alphabetic characters'),
  }),
  Yup.object({
    Proj2: Yup.string()
      .required('Enter Number of society')
      .matches(/^[A-Za-z\s]+$/,'Society number must only contain alphabetic characters'),
  }),
  Yup.object({
    Proj3: Yup.string()
      .required('Enter Your Locality')
      .matches(/^[A-Za-z\s]+$/, 'Locality must only contain alphabetic characters'),
  }),
  Yup.object({
    Proj4: Yup.string()
      .required('Enter Your Area')
      .matches(/^[A-Za-z\s]+$/, 'Area must only contain alphabetic characters'),
  }),
  Yup.object({
    Proj5: Yup.string()
    .required('Enter Your Address')
    .matches(/^[a-zA-Z0-9\s,\/-]+$/, 'Address only contains alphabetic & numeric characters, spaces, commas, forward slashes, and dashes')
  }),
  Yup.object({
    Proj6: Yup.string()
    .required("Lanched Date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD"),
  }),
  Yup.object({
    Proj7: Yup.string()
      .required('Developer Name is required')
      .matches(/^[A-Za-z\s.,'-]+$/, 'Developer Name only contain alphabetic characters and certain special characters')
  }),
  Yup.object({
    Proj8: Yup.string()
      .required('Project Name is required')
      .matches(/^[A-Za-z\s.,'-]+$/, 'Project Name only contain alphabetic characters and certain special characters')
  }),
  Yup.object({
    Proj9: Yup.number()
      .required('Total Tower No. is required')
      .typeError('Total Tower No. must only contain numeric characters'),
  }),
  Yup.object({
    Proj10: Yup.number()
      .required('Total Unit is required')
      .typeError('Total Unit must only contain numeric characters'),
  }),
  
  Yup.object({
    Proj11: Yup.number()
      .required('Project Size is required')
      .typeError('Project Size must only contain numeric characters'),
  }),
  Yup.object({
    Proj12: Yup.string()
    .required('Price Range is required')
    .matches(/^[A-Za-z0-9\s.,'-]+$/, 'Price Range must only contain Number & alphabetic characters and certain special characters'),
  }),
  Yup.object({
    Proj13: Yup.string()
      .required('Project Description is required')
      .matches(/^[A-Za-z\s.,'-]+$/,'Project Description must only contain alphabetic characters and certain special characters'),
  }),
  Yup.object({
    Proj14: Yup.string()
    .required("Possession Date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Possession Date must be in the format YYYY-MM-DD"),
    
  }), Yup.object({
    Proj15: Yup.string()
    .required('Price value is required')
    .typeError('Price value must only contain numeric characters'),
  }),
  
];

export default ProjectValidation;
