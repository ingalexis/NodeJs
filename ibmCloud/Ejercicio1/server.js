var Cloudant = require('@cloudant/cloudant');

var cloudant = new Cloudant({ url: 'https://xxxx.appdomain.cloud', 
                            plugins: { iamauth:{ iamApiKey: 'xxxxx' } } });

var db = cloudant.db.use('semillero');      

cloudant.db.list( function(err, body) {
    body.forEach(function(db) {
        console.log(db);
    });
});

var createDocument = function(callback) {
    console.log('Creando documento');
    db.insert(
    {
        "_id": "doc14",
        "firstName": "Pedro",
        "lastName": "Pinilla",
        "age": 32,
        "location": "Valle de aburra"
    },
    function(err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        callback(err, data);
    });
};

//createDocument((err, data) => console.log(err));

var doc;
var readDocument = function(callback) {
    console.log('Leyendo documento');
    db.get('doc14', function(err, data) {
        console.log('Error:', err);
        console.log('Data:', data);

        doc = data;
        callback(err, data);
    });
};

/*readDocument((err, data) => {
    if(err == null) {
        deleteDocument((err, data) => console.log(err));
    } else {
        console.log(err);
    }
});*/

var updateDocument = function(callback) {
    console.log('Actualizando documento');
    console.log(doc)
    doc.age = 80;
    db.insert(doc, function(err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        
        doc._rev = data.rev;
        callback(err, data);
    });
};

//updateDocument((err, data) => console.log(err));

var deleteDocument = function(callback) {
    console.log('Eliminando documento');
    db.destroy(doc._id, doc._rev, function(err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        callback(err, data);
    });
};

//deleteDocument((err, data) => console.log(err));

createDocument((err, data1) => {
    if(err == null) {
        readDocument((err, data2) => {
            if(err == null) {
                updateDocument((err, data3) => {
                    if(err == null) {
                        deleteDocument((err, data4) => console.log(err));
                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        });
    } else {
        console.log(err);
    }
});