const Budgets = {
    create: async (BudgetsData, FinancesData) => {
        const { title, percent, finance_id, user_id } = BudgetsData;

        const sql = 'insert into budgets (title, percent, budged_prediction, finance_id, user_id) values (? , ? , ? , ? , ?)';
        return new Promise((resolve, reject) => {
            db.query(sql, [title, percent, (parseInt(percent) / 100) * parseInt(FinancesData.budget), finance_id, user_id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    remove: async (BudgetsData) => {
        const { id } = BudgetsData;

        const sql = 'DELETE FROM budgets WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    update: async (BudgetsData, FinancesData) => {
        const { id, title, percent } = BudgetsData;

        const sql = 'UPDATE budgets SET title=?, percent=?, budged_prediction=? WHERE id=?';
        return new Promise((resolve, reject) => {
            db.query(sql, [id, title, percent, (parseInt(percent) / 100) * parseInt(FinancesData.budget)], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

}

module.exports = Budgets