const AccessControl = require('accesscontrol');

const allRights = {
    'create:any':['*'],
    'read:any':['*'],
    'update:any':['*'],
    'delete:any':['*']
}

let grantsObject = {
    admin:{
        profile:allRights
    },
    user:{
        profile:allRights
    }
}

const roles = new AccessControl(grantsObject)

module.exports = { roles }