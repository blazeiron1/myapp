var mysqlConfig = require('../connections/mysql');
var connection = mysqlConfig.connection;

getAll = () =>{
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM giphys ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
getAllR = () =>{
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM register ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};





getById = (id) =>{
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM giphys WHERE id = ' + id,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements[0]);
        });
    });
};


storeNew = (input) =>{
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO giphys (title,length,poster_gif,name) VALUES ('" + input.title + "','" + input.length + "','" + input.poster_gif + "','" + input.name + "')";

        connection.query(sql,  (error, giphy)=>{
            if(error){
                return reject(error);
            }
            return resolve(giphy);
        });0

    });
};
deleteById = (id) =>{
    return new Promise((resolve, reject) => {
        let sql = "DELETE FROM giphys WHERE id = " + id;

        connection.query(sql, (error, giphy)=> {
            if(error){
                return reject(error);
            }
            return resolve(giphy);
        });
    });
};

cleanUp = (id) =>{
    return new Promise((resolve, reject) => {
        let sql = "DELETE FROM giphys_artist WHERE giphy_id = " + id;

        connection.query(sql,  (error, giphy)=>{
            if(error){
                return reject(error);
            }
            return resolve(giphy);
        });
    });
};
storeRegister = (input) =>{
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO register (username,email,password) VALUES ('" + input.username + "','" + input.email + "','" + input.password + "')";

        connection.query(sql,  (error, register)=>{
            if(error){
                return reject(error);
            }
            return resolve(register);
        });0

    });
};
storeContact = (input) =>{
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO contact (name,email,subject,message) VALUES ('" + input.name + "','" + input.email + "','" + input.subject + "','" + input.message + "')";

        connection.query(sql,  (error, contact)=>{
            if(error){
                return reject(error);
            }
            return resolve(contact);
        });0

    });
};
module.exports = {
    getAll,
    getById,
    storeNew,
    deleteById,
    cleanUp,
    storeRegister,
    storeContact
}
