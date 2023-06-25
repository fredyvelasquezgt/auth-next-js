import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {

    if(req.method === 'POST') {
        const data = req.body;

        const { email, password } = data;
      
        if (
          !email ||
          !email.inclues("@") ||
          !password ||
          password.trim().lenght < 7
        ) {
          res.status(422).json({ message: "invalid input" });
          return;
        }
      
        const client = await connectToDatabase();
        const db = client.db();
      
        const hashedPassword = hashPassword(password);
      
        const result = await db.collection('users').insertOne({
            email: email,
            password: password
        })
      
        res.status(201).json({message: 'created user'})
      }
    }

 

export default hanlder;
