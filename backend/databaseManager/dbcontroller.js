const { Client } = require("pg");
const dotenv = require("dotenv")

dotenv.config();
const dbConnect = async ()=>{
    try{
    const client = new Client({
        user:process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT,
        host: process.env.PGHOST
    });
    await client.connect();
    return client;
}
catch(error){
    console.log('error in db : : '+error);
}
};
const dbSelectQuery = async(query)=>{
    try{
        const client = new Client({
            user:process.env.PGUSER,
            password: process.env.PGPASSWORD,
            database: process.env.PGDATABASE,
            port: process.env.PGPORT,
            host: process.env.PGHOST
        });
        await client.connect();
        const result = await client.query(query);
        await client.end()
        return result;
    }
    catch(error){
        console.log('error in db : : '+error);
    }
}

dbConnect();
module.exports= {
    dbConnect,
    dbSelectQuery
};