import *as Yup from "yup";

export const initialValues=()=>{
    return{
        email:"",
        password:"",
        passwordConfirm:"",
    }
};

export const validationSchema=()=>{
    return Yup.object({
        email:Yup.string()
        .email("El email es incorrecto")
        .required("El mail es obligatorio"),
        password:Yup.string().required("La contraseña es obligatoria"),
        passwordConfirm:Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("password")],"Las contraseñas no coinciden"),
    })
}