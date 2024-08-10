import * as Yup from 'yup';

const validationRules = Yup.object().shape({
  user_type: Yup.string().required("Please select a group"),
  member_name: Yup.string().required("Name is required"),
  member_email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  phone_number: Yup.number().required("Phone number is required"),
});

export default validationRules