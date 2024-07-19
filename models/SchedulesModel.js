const db = require('../config/db.js');

const Schedules = {
    create: async (FinancesData) => {
        const { title, description, category, reminder, start_time, end_time, start_dates, end_dates, type, status, user_id } = FinancesData;

        const sql = 'insert into schedules (title, description, category, reminder, start_time, end_time, start_dates, end_dates, type, status, user_id) values (? , ? , ? , ? , ?, ?, ?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(sql, [title, description, category, reminder, start_time, end_time, start_dates, end_dates, type, status, user_id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    remove: async (FinancesData) => {
        const { id } = FinancesData;

        const sql = 'DELETE FROM schedules WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    update: async (FinancesData) => {
        const { id, title, description, reminder, start_time, end_time, start_dates, end_dates } = FinancesData;

        const sql = 'UPDATE schedules SET title=?, description=?, reminder=?, start_time=?, end_time=?, start_dates=?, end_dates=? WHERE id=?';
        return new Promise((resolve, reject) => {
            db.query(sql, [title, description, reminder, start_time, end_time, start_dates, end_dates, id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    return: async () => {

        const sql = 'SELECT * FROM schedules';
        return new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    updateStatus: async (status, id) => {

        const sql = 'UPDATE schedules SET status=? WHERE id=?';
        return new Promise((resolve, reject) => {
            db.query(sql, [status, id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

}


module.exports = Schedules;