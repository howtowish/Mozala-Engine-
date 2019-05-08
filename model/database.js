var mysql      = require('mysql');
const config = require('../config/config')
var connection = mysql.createConnection(config);
function connect(callback){
    connection.connect(function(err) {
        if (err) {
            // console.error('Error connecting: ' + err.stack);
            callback(null,err)
            return;
        }
        callback(connection,null)
        // console.log('Connected as id ' + connection.threadId);
    });
}
function getDanhMuc(callback){
    connection.query('SELECT * FROM danhmuc', function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}
function getSanPham(callback){
    connection.query('SELECT * FROM sanpham', function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}
module.exports = {
    connection:connection,
    connect:connect,
    getDanhMuc:getDanhMuc,
    getSanPham:getSanPham

    
}
