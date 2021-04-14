const Cloudant = require('@cloudant/cloudant');
const databaseName = 'movies-demo';

let getConnection = () => {
    return new Promise((resolve, reject) => {
        Cloudant({ 
            url: 'xxxxx', 
            plugins: { 
                iamauth:{ 
                    iamApiKey: 'xxxx' 
                } 
            } 
        }, (error, connection) => {
            if(connection) {
                resolve(connection);
            } else {
                reject(error);
            }
        });
    });
};

let fetchDataFromDB = connection => {
    return new Promise((resolve, reject) => {
        let objectArray = [];
        let DBName = connection.db.use(databaseName);
        DBName.view('data', 'get-old-movies', { 'include_docs': true }, (err, result) => {
            if(result) {
                result.rows.forEach(document => {
                    let dbDoc =  document.doc;
                    dbDoc.old_movies = true;
                    objectArray.push(dbDoc);
                });
                resolve(objectArray);
            } else {
                reject(err);
            }
        });    
    });
};

let updateData =  (documentObject, connection) => {
    return new Promise((resolve, reject) => {
        let dbName = connection.db.use(databaseName);
        dbName.insert(documentObject, (err, document) => {
            if(err) {
                reject(err);
            } else {
                resolve('200');
            }
        });
    });
};

let updateBulkData =  (documentObject, connection) => {
    return new Promise((resolve, reject) => {
        let dbName = connection.db.use(databaseName);
        dbName.bulk(documentObject, (err, document) => {
            if(err) {
                reject(err);
            } else {
                resolve('200');
            }
        });
    });
};

async function main() {
    let connection; 
    let dataArray;
    let i = 0;
    const size = 500;

    try { 
        connection = await getConnection();
        dataArray = await fetchDataFromDB(connection);
    } catch(err) {
        console.log(err);
    }
    
    /*for (item in dataArray) {
        try {
            let status = await updateData(dataArray[item], connection);            
            if(status != "200") {
                console.log(`Error: ${status}`);
                break;
            }
        } catch(err) {
            console.log(err);
        }     
    }*/

    while(dataArray[i]) {
        console.log(i);
        try {
            let status = await updateBulkData({docs: dataArray.splice(0, size)}, connection);
            if(status != "200") {
                console.log(`Error: ${status}`);
                break;
            }
        } catch(err) {
            console.log(err);
        }
        i++;
    }

    console.log('FINISHED...');
}

main();