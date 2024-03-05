const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');

router.route('/ticket/:id')
.get(ticketController.getTicketById)


router.get('/all', ticketController.allTickets);



module.exports = router;