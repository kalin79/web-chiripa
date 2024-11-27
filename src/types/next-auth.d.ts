import "next-auth";
import { DefaultSession } from "next-auth";
// import { JWT } from "next-auth/jwt";
declare module "next-auth" {
    interface Session {
        user: {
            accessToken?: string | null;
            name?: string | null;
            email?: string | null;
            dni?: string | null;
            // token?: string | null;

        } & DefaultSession["user"];
    }

    interface User {
        accessToken?: string;
        dni?: string; // Incluye el DNI si lo necesitas aquí.
        // token?: string;

    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        dni?: string;
        // token?: string | null;
    }
}
