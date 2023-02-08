const { dbConnect, dbSelectQuery } = require("../databaseManager/dbcontroller")


const getlist = async ()=>{
    const queryResult = await dbSelectQuery('SELECT * FROM list_table');
    console.log('List table : : '+queryResult.rows);
    return queryResult.rows;
}
const addToList = async(req,res)=>{
    const dbclient = await dbConnect();
    const queryresult = await dbclient.query('INSERT INTO  list_table (details,postedby,time_posted) VALUES ($1,$2,NOW())', [req.body.details,req.body.name])
    console.log('requst body : : '+req.body);
    console.log('db query  :  '+ queryresult);
    dbclient.end();
    return {result :{status:200, data:'ok'}};
}
const deleteFromList = async (req,res)=>{
    const dbclient= await dbConnect();
    const queryresult = await dbclient.query('DELETE FROM list_table WHERE (ID = $1)', [req.body.id]);
    console.log('requst body : : '+req.body);
    console.log('db query  :  '+ queryresult);
    dbclient.end();
    return {result :{status:200, data:'ok'}};
}
module.exports = {
    getlist,
    addToList,
    deleteFromList
}