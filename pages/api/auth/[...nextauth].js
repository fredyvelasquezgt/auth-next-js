import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const client = await connectToDatabase()
                
                const usersCollection = client.db.collections('users');

                usersCollection.findOne({email: credentials.email})


                client.close();
            }
        })
    ]
});