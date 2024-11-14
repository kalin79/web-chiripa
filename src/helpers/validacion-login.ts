import { objLogin } from "@/interfaces/login"

export function validateLogin(user: objLogin) {
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
        errores.msjStatus = "La contraseña es obligatorio"
        errores.status = true;
    }
    return errores
}