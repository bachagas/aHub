/**
 * @author Bruno
 * Um exemplo de uso de banco de dados local no device.
 * 
 */

// INICIALIZA BANCO
function createAllDataBase(){
    var db = Ti.Database.open('aHUB_DB');

   /* GENERAL PARAMETERS TABLE */
   db.execute('CREATE TABLE IF NOT EXISTS params(paramId INTEGER, paramName TEXT, value TEXT, type TEXT, comment TEXT);');
   db.close();
};

exports.initializeDb = function() {
	createAllDataBase();
};

function loadUser() {
    var user = null;
    var db = Ti.Database.open('aHUB_DB');
    var result = db.execute('SELECT * FROM params WHERE paramName = ?', "USERNAME");
    while (result.isValidRow()) {
    	user = result.fieldByName('value');
        result.next();
    }
    result.close(); //FECHA BANCO DE DADOS
    db.close();//FECHA BANCO DE DADOS
    //RETORNA DATA
    return user;
};
exports.loadUser = loadUser;

function saveUser(_user) {
    var user = null;
    var db = Ti.Database.open('aHUB_DB');
    db.execute('UPDATE params SET value = ? WHERE paramName = ?', _user, "USERNAME");
    if (db.rowsAffected==0) {
    	db.execute('INSERT INTO params values (1, "USERNAME", ?, "String", "App username");', _user);	
    }
    //FECHA BANCO DE DADOS
    db.close();
};
exports.saveUser = saveUser;