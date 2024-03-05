const { ticket } = require('../models/ticket');


const allTickets = async(req) => {
    try {
        const tickets = await ticket
        .find({})


        return tickets
    } catch(error) {
        throw error
    }
}

const getTicketById =  async( _id ) => {
    try {
        const ticket1 = await ticket.findById(_id) 
        if(!ticket1) throw new ApiError(httpStatus.NOT_FOUND,'Ticket not found');
        return ticket1;
    } catch(error) {
        throw error
    }
}



module.exports = {
    allTickets,
    getTicketById
}