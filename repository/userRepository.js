const fs = require('fs');

const usersFile = './users.json'

module.exports.userRepository = {
    find: function() {
        const users = fs.readFileSync(usersFile, {encoding: 'utf-8'});
        return JSON.parse(users);
    },

    findById: function(id) {
        const users = this.find();
        return users.find(user => user.id === id);
    },

    findByAge: function(age) {
        const users = this.find();
        return users.filter(user => user.age > age);
    },

    findByDomain: function(domain) {
        const users = this.find();
        return users.filter(user => user.email.split('@')[1].split('.')[0] === domain)
    },

    create: function(user) {
        const users = this.find();
        users.push(user);
        fs.writeFileSync(usersFile, JSON.stringify(users), {encoding: 'utf-8'})
        return user;
    },

    update: function(updatedUser) {
        let users = this.find();
        users = users.map(user => user.id === updatedUser.id ? updatedUser : user);
        fs.writeFileSync(usersFile, JSON.stringify(users), {encoding: 'utf-8'});
        return updatedUser;
    },

    delete: function(id) {
        let users = this.find();
        users = users.filter(user => user.id !== id);
        fs.writeFileSync(usersFile, JSON.stringify(users), {encoding: 'utf-8'});
    }
}