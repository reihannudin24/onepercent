const Finances = {
    create: async (FinancesData) => {
        const { title, goals, budget, month, year, user_id } = FinancesData;

        const sql = 'insert into finances (title, goals, budget, month, year, user_id) values (? , ? , ? , ? , ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(sql, [title, goals, budget, month, year, user_id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    remove: async (FinancesData) => {
        const { id } = FinancesData;

        const sql = 'DELETE FROM finances WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    update: async (FinancesData) => {
        const { id, title, goals, budget, month, year } = FinancesData;

        const sql = 'UPDATE finances SET title=?, goals=?, budget=?, month=?, year=? WHERE id=?';
        return new Promise((resolve, reject) => {
            db.query(sql, [id, title, goals, budget, month, year], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
    
}

module.exports = Finances