import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {

    const data = req.body;

    const {email, password} = data; 

   const client = await  connectToDatabase()
   const db = client.db()

   db.collection('users')
}

export default hanlder;