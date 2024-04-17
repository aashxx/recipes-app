import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {

    interface User {
        subscription: String
    }

    interface Session {
        user: User & {
            subscription: String
        }
        token: {
            subscription: String
        }
    }
}