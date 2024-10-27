import { objUser } from "@/interfaces/user"

export function validateRegisterUser(user: objUser) {
    const errores = {
        status: false,
        msjStatus: '',
    }
    if (!user.email) {
        errores.msjStatus = "El email es obligatorio";
        errores.status = true;
        return errores
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)) {
        errores.msjStatus = "Email no valido"
        errores.status = true;
        return errores
    }

    if (!user.password) {
        errores.msjStatus = "El password es obligatorio"
        errores.status = true;
        return errores
    }
    if (!user.password_confirmation) {
        errores.msjStatus = "El password es obligatorio"
        errores.status = true;
        return errores
    } else {
        if (user.password_confirmation != user.password) {
            errores.msjStatus = "Las contraseñas deben ser coincidir"
            errores.status = true;
            return errores
        }
    }
    if (!user.nombres) {
        errores.msjStatus = "El nombre es obligatorio"
        errores.status = true;
    }
    if (!user.apellido_materno) {
        errores.msjStatus = "El apellido es obligatorio"
        errores.status = true;
    }
    if ((!user.dni) || (user.dni.length < 8)) {
        console.log(user.dni.length)
        console.log(user.dni)
        errores.msjStatus = "El DNI es obligatorio y debe tener 8 digitos"
        errores.status = true;
    }
    if (!user.celular) {
        errores.msjStatus = "El movil es obligatorio"
        errores.status = true;
    }
    if (!user.tyc) {
        errores.msjStatus = "Términos y Condiciones es obligatorio"
        errores.status = true;
    }
    return errores
}