import * as Yup from "yup";

 const Commercialvalidation = [
  Yup.object({
    C1: Yup.string()
      .required("City Name is required")
      .matches(/^[A-Za-z\s]+$/, "City must alphabetic characters"),
  }),
  Yup.object({
    C2: Yup.string()
      .required("Locality is required")
      .matches(/^[A-Za-z\s]+$/, "Locality must only contain alphabetic characters"),
  }),
  Yup.object({
    C3: Yup.string()
      .required("Land Zone is required")
      .matches(/^[A-Za-z\s]+$/, "Land Zone must only contain alphabetic characters"),
  }),
  Yup.object({
    C4: Yup.string()
      .required("Ideal For Businesses is required")
      .matches(/^[A-Za-z\s]+$/, "Ideal For Businesses must only contain alphabetic characters"),
  }),
  Yup.object({
    C5: Yup.number()
      .required("Enter Your Floor No.")
      .typeError("Floor No. must only contain numeric characters"),
  }),
  Yup.object({
    C6: Yup.number()
      .required("Enter Total Floor No.")
      .typeError("Total Floor No. must only contain numeric characters"),
  }),
  Yup.object({
    C7: Yup.number()
      .required("Enter Cabin/Meeting Room")
      .typeError("Cabin/Meeting Room must only contain numeric characters"),
  }),
  Yup.object({
    C8: Yup.string()
      .required("Willing to Modify interior is required")
      .matches(/^[A-Za-z\s]+$/, "Select one option from above"),
  }),
  Yup.object({
    C9: Yup.string()
      .required("Personal Washroom required")
      .matches(/^[A-Za-z\s]+$/, "Select one option from above"),
  }),
  Yup.object({
    C10: Yup.number()
      .required("Enter Washroom No.")
      .typeError("Washroom No. must only contain numeric characters"),
  }),
  Yup.object({
    C11: Yup.number()
      .required("Enter Assured Return")
      .typeError("Assured Return must only contain numeric characters"),
  }),
  Yup.object({
    C12: Yup.string()
      .required("Pantry/cafeteria required")
      .matches(/^[A-Za-z\s]+$/, "Select one option from above"),
  }),
  Yup.object({
    C13: Yup.number()
      .required("Carpet Area is required")
      .typeError("Carpet Area must only contain numeric characters"),
  }),
  Yup.object({
    C14: Yup.number()
      .required("Super Area is required")
      .typeError("Super Area must only contain numeric characters"),
  }),
  Yup.object({
    C15: Yup.string()
      .required("Current Rent Out required")
      .matches(/^[A-Za-z\s]+$/, "Select one option from above"),
  }),
  Yup.object({
    C16: Yup.number()
      .required("Monthly Rent is required")
      .typeError("Monthly Rent must only contain numeric characters"),
  }),
  Yup.object({
    C17: Yup.number()
      .required("Security Amount is required")
      .typeError("Security Amount must only contain numeric characters"),
  }),
  Yup.object({
    C18: Yup.number()
      .required("Maintenance Charges are required")
      .typeError("Maintenance Charges must only contain numeric characters"),
  }),
  
  Yup.object({
    C19: Yup.string()
      .required('Project Details is required')
      .matches(/^[A-Za-z\s.,'-]+$/, 'Project Details must only contain alphabetic characters and certain special characters')

  }),
];


export default Commercialvalidation;