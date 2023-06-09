var _ = require('lodash')

//Mariadb connection
const mariadb = require('mariadb')
const pool = mariadb.createPool({
    host: 'localhost', 
    port: 3306,
    user:'sweets', 
    password: 'manager',
    database: 'susigkeiten',
});


module.exports = {
    getSweetsOverviewData
}


function getSweetsOverviewData () {
    return new Promise((resolve, reject) => {
        pool.query("SELECT s.s_id, s.Name, s.verkaufs_preis, p.anzahl AS 'StückProPackung', p.letzter_kauf_preis AS 'PreisProPackung' FROM susigkeiten s JOIN packungen p ON s.s_id=p.s_id ORDER BY s.Name")
            .then(rows => {
                resolve([{"result": "success", rows}]);
            })
            .catch(err => {
            //handle error
                console.log(err)
                resolve(err)
            });
    })
}
