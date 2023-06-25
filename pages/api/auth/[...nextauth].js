import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const client = await connectToDatabase()
                
                const usersCollection = client.db.collections('users');

                const user = await usersCollection.findOne({email: credentials.email})

                if(!user) {
                    throw new Error('No user found');
                }

                const isValid = await verifyPassword(credentials.password, user.password)

                if(!isValid) {
                    throw new Error ('could not log you in')
                }

                

                client.close();
            }
        })
    ]
});