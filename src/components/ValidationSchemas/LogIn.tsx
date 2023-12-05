import * as yup from "yup";

export const logInValidationSchena = yup.object().shape({
  Email: yup.string().email("E-mail invalido").required("El E-mail es requerido"),
  Password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(16, "La contraseña debe tener como máximo 16 caracteres")
    .required("La contraseña es requerida"),
});
