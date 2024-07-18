import * as Yup from "yup";

export const ContactSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
})