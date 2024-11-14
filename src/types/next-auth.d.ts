import "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";
declare module "next-auth" {
    interface Session {
        user: {
            accessToken?: string;
            nivel?: string;
            token?: string;
            lastname?: string;
            mgs?: string;
        }& DefaultSession["user"];
    }

    interface User {
        accessToken?: string;
        nivel?: string; 
        token?: string;
        lastname?: string;
        mgs?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        nivel?: string;
        token?: string;
        lastname?: string;
        mgs?: string;
    }
  }
