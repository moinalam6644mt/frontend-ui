import * as Yup from 'yup';

const validationRules = Yup.object().shape({
  property_profile: Yup.string().required("Please select a profile type"),
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
  phone_number: Yup.string().required("Please enter your phone number"),
});

export default validationRules;
