import { objLogin } from "@/interfaces/login"

export function validateReset(user: objLogin) {
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
    return errores
}

export function validateReset2(user: objLogin) {
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
        errores.msjStatus = "Debe ingresar su contraseña";
        errores.status = true;
        return errores
    }
    if (!user.password_confirmation) {
        errores.msjStatus = "Debe confirmar su contraseña"
        errores.status = true;
        return errores
    }

    if (user.password != user.password_confirmation) {
        errores.msjStatus = "Ambas contraseña no coinciden"
        errores.status = true;
        return errores
    }
    return errores
}