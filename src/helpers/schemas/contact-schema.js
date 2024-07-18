import * as Yup from "yup";

export const ContactSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(4,"Too short").required("Required"),
    name: Yup.string().min(4,"Too short").required("Required"),
    subject: Yup.string().min(4,"Too short").required("Required"),
})