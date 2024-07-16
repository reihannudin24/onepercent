
const db = require('../config/db.js');
const bcrypt = require('bcrypt');

const User = {
    create : async (userData) => {
        const {username, firstname, lastname, email, password, contact, age, birthday, location} = userData;
        const hashedPassword = bcrypt.hashSync(password, 10);

        const sql = 'insert into users (username, firstname, lastname, email, password, contact, age, birthday, location) values (? , ? , ? , ? , ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(sql, [username, firstname, lastname, email, hashedPassword, contact, age, birthday, location], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    findByEmail : async (email) => {
        const  sql = 'select * from users where email = ?';
        return new Promise((resolve, reject) => {
            db.query(sql , [email] , (err, results) => {
                if (err) return reject(err);
                resolve(results[0])
            })
        })
    },

    findById: async  (id) => {
        const sql = 'select * from users where id = ?'
        return new Promise((resolve , reject) => {
            db.query(sql , [id] , (err, result) => {
                if (err) return reject(err);
                resolve(result[0]);
            })
        })
    },

    comparePassword : async (plainPassword, hashedPassword) => {
        return await  bcrypt.compare(plainPassword , hashedPassword);
    },

    updatePassword : async (id, newPassword) => {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const sql = 'update users set password = ? where id = ?';
        return new Promise((resolve, reject) => {
           db.query(sql, [hashedPassword, id] , (err, results) => {
               if (err) return reject(err);
               resolve(results);
           })
        })
    }

}

module.exports = User;