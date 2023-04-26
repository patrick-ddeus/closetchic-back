import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });

const ConnectDatabase = () => {
    client.connect().then(() => {
        console.log('Conexão estabelecida com sucesso!');
    }).catch(err => console.error(err.message));
};

export const database = client.db();

export default ConnectDatabase;