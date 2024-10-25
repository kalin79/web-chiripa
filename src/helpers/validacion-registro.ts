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
    if (!user.recoveryPass) {
        errores.msjStatus = "El password es obligatorio"
        errores.status = true;
        return errores
    } else {
        if (user.recoveryPass != user.password) {
            errores.msjStatus = "Las contraseñas deben ser coincidir"
            errores.status = true;
            return errores
        }
    }
    if (!user.name) {
        errores.msjStatus = "El nombre es obligatorio"
        errores.status = true;
    }
    if (!user.lastname) {
        errores.msjStatus = "El apellido es obligatorio"
        errores.status = true;
    }
    if (!user.doc) {
        errores.msjStatus = "El DNI es obligatorio"
        errores.status = true;
    }
    if (!user.movil) {
        errores.msjStatus = "El movil es obligatorio"
        errores.status = true;
    }
    if (!user.tyc) {
        errores.msjStatus = "Términos y Condiciones es obligatorio"
        errores.status = true;
    }
    return errores
}