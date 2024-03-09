const { transactionService } = require('../services');

const transactionController = {
    async addTransaction(req, res, next) {
        try {
            const data = await transactionService.addTransaction(req);
            res.json(data);
        } catch (error) {
            // Properly handle the error here
            console.error('Error in addTransaction:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            // You may also want to call next(error) if you want to pass the error to the global error handler
        }
    }
};

module.exports = transactionController;
