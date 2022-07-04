const { UserList } = require('./FakeData');
const _ = require("lodash");

var resolvers = {

    users: () => {
        return UserList;
    },
    user: (parent, args) => {
        const { id } = args;
        const data = Number(id);
        return UserList[2];
    },


};

module.exports = { resolvers };