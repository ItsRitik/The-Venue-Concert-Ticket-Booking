const express = require('express');
const router = express.Router();
const authRoute = require('./auth.route');
const usersRoute = require('./users.route');
const ticketsRoute = require('./ticket.route');
const transactionRoute = require('./transaction.route');

const routesIndex = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path:'/users',
        route: usersRoute 
    },
    {
        path:'/ticket',
        route: ticketsRoute 
    },
    {
        path:'/transaction',
        route:transactionRoute
    }

]

routesIndex.forEach((route) => {
    router.use(route.path, route.route)
})



module.exports = router;