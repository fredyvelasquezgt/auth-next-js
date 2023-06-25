import {MongoClient} from 'mongodb'


function connectToDatabase() {
    MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.domp7.mongodb.net/?retryWrites=true&w=majority');
}
