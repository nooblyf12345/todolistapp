const { dbConnect, dbSelectQuery } = require("../databaseManager/dbcontroller")


const getlist = async ()=>{
    const queryResult = await dbSelectQuery('SELECT * FROM list_table');
    console.log('List table : : '+queryResult.rows);
    return queryResult.rows;
}

module.exports = {
    getlist,
}