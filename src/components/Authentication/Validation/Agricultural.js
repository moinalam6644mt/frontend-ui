import * as Yup from "yup";

const AgriculturalValidation = [
  Yup.object({
    agr1: Yup.string()
      .required("City Name is required")
      .matches(/^[A-Za-z\s]+$/, "City must alphabetic characters"),
  }),
  Yup.object({
    agr2: Yup.string()
      .required("Locality is required")
      .matches(
        /^[A-Za-z\s]+$/,
        "Locality must only contain alphabetic characters"
      ),
  }),
  Yup.object({
    agr3: Yup.string()
      .required("Area is required")
      .matches(/^[A-Za-z\s]+$/, "Area must only contain alphabetic characters"),
  }),
  Yup.object({
    agr4: Yup.string()
      .required("Address is required")
      .matches(
        /^[a-zA-Z0-9\s,\/]+$/,
        "Address must only contain alphabetic characters"
      ),
  }),
  Yup.object({
    agr5: Yup.number()
      .required("Enter Your Plot Area in (sq/ft)")
      .typeError("Plot Area must only contain numeric characters"),
  }),
  Yup.object({
    agr6: Yup.number()
      .required("bedroom No. is required")
      .typeError("bedroom must only contain numeric characters"),
  }),
  Yup.object({
    agr7: Yup
      .number()
      .required("bathroom No. is required")
      .typeError("bathroom must only contain numeric characters"),
  }),
  Yup.object({
    agr8: Yup.number()
      .required("Enter Carpet Area in (sq/ft)")
      .typeError("Carpet Area must only contain numeric characters"),
  }),
  Yup.object({
    agr9: Yup.number()
      .required("Enter Super Area in (sq/ft)")
      .typeError("Super Area must only contain numeric characters"),
  }),
  Yup.object({
    agr10: Yup.number()
      .required("Enter Monthly Charge")
      .typeError("Monthly Charge must only contain numeric characters"),
  }),
  Yup.object({
    agr11: Yup.number()
      .required("Maintainance Charge is required")
      .typeError("Maintainance Charge must only contain numeric characters"),
  }),
  Yup.object({
    agr12: Yup.string()
      .required("Available Date is required")
      .matches(/^\d{2}-\d{2}-\d{4}$/, "Date must be in the format DD-MM-YYYY"),
  }),
  Yup.object({
    agr13: Yup.number()
      .required("Contruction Age is required")
      .typeError("Contruction Age must only contain numeric characters"),
  }),
];

export default AgriculturalValidation;
