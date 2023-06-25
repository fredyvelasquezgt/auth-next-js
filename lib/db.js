import {MongoClient} from 'mongodb'


export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.domp7.mongodb.net/auth-demo?retryWrites=true&w=majority');
    return client;
}
