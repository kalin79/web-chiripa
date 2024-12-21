import { CartUser } from "@/interfaces/cart"

export function validateCompraInvitado(user: CartUser) {
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

    if (!user.nombres) {
        errores.msjStatus = "Nombre es obligatorio"
        errores.status = true;
    }

    if (!user.apellidos) {
        errores.msjStatus = "Apellido es obligatorio"
        errores.status = true;
    }

    if (!user.telefono) {
        errores.msjStatus = "Celular es obligatorio"
        errores.status = true;
    }

    if (!user.numero_documento) {
        errores.msjStatus = "Documento es obligatorio"
        errores.status = true;
    }
    if (!user.tyc) {
        errores.msjStatus = "Términos y Condiciones es obligatorio"
        errores.status = true;
    }
    return errores
}