
const db = require('../config/db.js');
const bcrypt = require('bcrypt');

const User = {
    register: async (userData) => {
        const { email, token } = userData;

        const sql = 'insert into users (email, token_remember) values (? , ?)';
        return new Promise((resolve, reject) => {
            db.query(sql, [email, token], (err, result) => {
                if (err) {
                    // Check for duplicate entry error
                    if (err.code === 'ER_DUP_ENTRY' && err.sqlMessage.includes('email')){
                        return reject(new Error('Email telah terdaftar'))
                    }
                    return reject(err)
                }
                resolve(result);
            });
        });
    },

    findByEmail: async (email) => {
        const sql = 'select * from users where email = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, [email], (err, results) => {
                if (err) return reject(err);
                resolve(results[0])
            })
        })
    },

    addPassword : async (token, password, confirmPassword) => {
        try{
            // Query to find the user by token
            const userQuery = 'SELECT * FROM users WHERE token_remember = ?';

            // Check if the token exists
            const user = await new Promise((resolve, reject) => {
                db.query(userQuery, [token], (err, results) => {
                    if (err) return reject(err);
                    if (results.length === 0) return reject(new Error('Token tidak valid'));
                    resolve(results[0]);
                });
            });

            // Check if passwords match
            if (password !== confirmPassword) {
                throw new Error('Password tidak sama');
            }

            // Hash the new password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Update the user's password in the database
            const updateQuery = 'UPDATE users SET password = ? WHERE token_remember = ?';
            await new Promise((resolve, reject) => {
                db.query(updateQuery, [hashedPassword, token], (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                });
            });

        }catch (error){
            throw new Error(error.message);
        }
    },

    addInformation : async (token, username, firstname, lastname, contact) => {
        try {
            // Query to find the user by token
            const userQuery = 'SELECT * FROM users WHERE token_remember = ?';

            // Check if the token exists
            const user = await new Promise((resolve, reject) => {
                db.query(userQuery, [token], (err, results) => {
                    if (err) return reject(err);
                    if (results.length === 0) return reject(new Error('Token tidak valid'));
                    resolve(results[0]);
                });
            });

            const updateQuery = 'UPDATE users SET username = ?, firstname = ?, lastname = ?, contact = ? WHERE token_remember = ?';
            await new Promise((resolve, reject) => {
                db.query(updateQuery, [username, firstname, lastname, contact, token], (err, result) => {
                    if (err) {
                        console.error('Database update error:', err);
                        return reject(new Error('Database update error'));
                    }
                    resolve(result);
                });
            });


            console.log('User information updated successfully');
        } catch (error) {
            console.error('Error in addInformation function:', error);
            throw new Error(error.message);
        }
    },

    addInformationOptional : async (token, birthday, location) =>{
        try{
            // Query to find the user by token
            const userQuery = 'SELECT * FROM users WHERE token_remember = ?';
            // Check if the token exists
            const user = await new Promise((resolve, reject) => {
                db.query(userQuery, [token], (err, results) => {
                    if (err) return reject(err);
                    if (results.length === 0) return reject(new Error('Token tidak valid'));
                    resolve(results[0]);
                });
            });

            const updateQuery = 'update users set birthday = ?, location = ? where token_remember = ?';
            await new Promise((resolve , reject) => {
                db.query(updateQuery, [ birthday, location, token], (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                });
            });

        }  catch (error){
            throw new Error(error.message)
        }
    },


    comparePassword: async (plainPassword, hashedPassword) => {
        return await bcrypt.compareSync(plainPassword, hashedPassword);
    },



    findByToken: async (token) => {
        const sql = 'select * from users where token_remember = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, [token], (err, results) => {
                if (err) return reject(err);
                resolve(results[0])
            })
        })
    },

    findById: async (id) => {
        const sql = 'select * from users where id = ?'
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result[0]);
            })
        })
    },



    updatePassword: async (id, newPassword) => {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const sql = 'update users set password = ? where id = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, [hashedPassword, id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            })
        })
    },

    updateRememberToken: async (id, newToken) => {
        const sql = 'update users set token_remember = ? where id = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, [newToken, id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            })
        })
    }

}

module.exports = User;