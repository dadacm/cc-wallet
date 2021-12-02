
import { createConnection } from "typeorm";

export const connectDb = async () => {
const connection = await createConnection();
console.log(`App conectado ao db ${connection.options.database}`);

process.on('SIGINT', () => {
    connection.close().then(() => console.log('conexão fechada'));
}) 
};