import { connectToDatabase } from "../../../lib/db";

async function ahanlder() {
   const client = await  connectToDatabase()
   const db = client.db()
}

export default hanlder;