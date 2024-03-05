const { ticketsService } = require('../services')

const ticketsController = {
    async getTicketById(req,res,next){
        try{
            const _id = req.params.id;
            const ticket = await ticketsService.getTicketById(_id);
            res.json(ticket)
        } catch(error){
            next(error)
        }
    },
    async allTickets(req,res,next){
        try{
            const tickets = await ticketsService.allTickets(req);
            res.json(tickets)
        } catch(error){
            next(error)
        }
    },

}




module.exports = ticketsController