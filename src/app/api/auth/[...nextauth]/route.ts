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
                try {
                    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}user/login/`)

                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}user/login/`,
                        {
                            method: "POST",
                            body: JSON.stringify({
                                email: credentials?.email,
                                password: credentials?.password,
                            }),
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                    console.log(res)
                    const user = await res.json();
                    console.log('user', user)
                    if (user.errors) {
                        const errors = {
                            message: [
                                user.errors.non_field_errors
                            ]
                        }
                        throw errors;
                    }

                    console.log('user', user)
                    const user2 = {
                        id: user.token.access,
                        token: user.token.access,
                        mgs: user.mgs,
                        name: user.Data.nombres,
                        lastname: user.Data.apellidos,
                        nivel: user.Data.Nivel,
                        image: user.Data.foto,
                        email: credentials?.email,
                    }
                    return user2;

                } catch (err) {
                    console.log('error', err)
                    throw err
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
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            session.user.token = token.token;
            session.user.lastname = token.lastname;
            return session;
        },
    },
    pages: {
        signIn: "/login"
    },
})

export { handler as GET, handler as POST }