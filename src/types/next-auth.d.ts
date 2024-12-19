import "next-auth";
import { DefaultSession } from "next-auth";
// import { JWT } from "next-auth/jwt";
declare module "next-auth" {
    interface Session {
        user: {
            accessToken?: string | null;
            id?: string | null;
            name?: string | null;
            email?: string | null;
            dni?: string | null;
            apellido_paterno?: string | null;
            celular?: string | null;
            token?: string | null;
            created_user?: string | null;

        } & DefaultSession["user"];
    }

    interface User {
        accessToken?: string;
        dni?: string; // Incluye el DNI si lo necesitas aquí.
        id?: string | null;
        apellido_paterno?: string | null;
        celular?: string | null;
        token?: string;
        created_user?: string | null;

    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        dni?: string;
        id?: string | null;
        apellido_paterno?: string | null;
        celular?: string | null;
        token?: string | null;
        created_user?: string | null;
    }
}
