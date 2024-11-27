import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "test@test.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}participante/authenticate`)
                try {


                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}participante/authenticate`,
                        {
                            method: "POST",
                            body: JSON.stringify({
                                email: credentials?.email,
                                password: credentials?.password,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization-secret": "TSTCbj7mQO2xEOuwEK08RajQS1OxndfY"
                            },
                        }
                    );
                    if (!res.ok) {
                        throw new Error("Fallo en la autenticación");
                    }

                    const user = await res.json();
                    if (user.errors) {
                        throw new Error(user.errors.non_field_errors || "Error desconocido");
                    }
                    console.log('user', user)
                    return {
                        id: user.user.id,
                        dni: user.user.dni || '',
                        token: user.access_token,
                        name: user.user.nombres,
                        email: user.user.email,
                        expires_in: user.expires_in
                    };

                } catch (err) {
                    if (err instanceof Error) {
                        console.error("Error:", err.message);
                    } else {
                        console.error("Error desconocido:", err);
                    }
                    throw new Error("Error de autenticación");
                }
            }
        })
    ],
    session: {
        // Estrategia de la session JWT
        strategy: 'jwt',
        // Tiempo de vida de la session em segundos (ej. 1 hora)
        maxAge: 60 * 60, // 1 hora 
    },
    jwt: {
        // Tiempo de vida del token en segundos (ej. 1 hora)
        maxAge: 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            // console.log(user)
            if (user) {
                token.accessToken = user.accessToken ?? undefined;
                token.dni = user.dni;
                // token.token = user.token ?? undefined;
            }
            return token;
        },
        async session({ session, token }) {
            // console.log("Token recibido:", token);
            session.user.accessToken = token.accessToken ?? undefined;
            if (token.dni) {
                session.user.dni = token.dni;
            }
            // session.user.token = token.token ?? undefined;

            return session;
        },
    },
    pages: {
        signIn: "/login"
    },
})

export { handler as GET, handler as POST }