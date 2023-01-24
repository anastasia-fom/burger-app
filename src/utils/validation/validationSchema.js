import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, "< 2").max(30, "> 30"),
    email: Yup.string(),
    phone: Yup.string().max(12, "> 12"),
    address: Yup.string().min(2, "< 2").max(30, "> 30"),
});
