const { MyError } = require("../errors/MyError");
const { User } = require("../model/User");
const {userRepository} = require("../repository/userRepository");
const randomUUID = require('crypto').randomUUID;

function validateUser(user) {
    let message = [];
    const fields = ['name', 'email', 'age'];

    fields.forEach(field => {
        if (!user[field]) {
            message.push(`${field}: field is empty`);
        } else {
            if (field === 'age' && user[field] <= 0 || user[field] >= 150) {
                message.push(`${field}: incorrect value`);
            }
            if (field === 'email' && !validateEmail(user[field])) {
                message.push(`${field}: incorrect value`);
            }
        } 
    })


    if (message.length > 0) {
        throw new MyError(400, message.join("; "))
    }
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

module.exports.userService = {
    getAll: function(sort=false) {
        let users = userRepository.find();
        users = sort ? users.sort((u1, u2) => u1.name.localeCompare(u2.name)) : users;
        return users;
    },

    getById: function(id) {
        const user = userRepository.findById(id);
        if (!user) {
            throw new MyError(404, `user with id = ${id} not found`);
        }
        return user;
    },

    getByAge: function(age) {
        return userRepository.findByAge(age);
    },

    getByDomain: function(domain) {
        return userRepository.findByDomain(domain);
    },

    add: function (user) {
        validateUser(user);
        user = new User(randomUUID(), user.name, user.email, user.age);
        return userRepository.create(user);
    },

    update: function (updatedUser, id) {
        validateUser(updatedUser);
        const user = this.getById(id); // проверка на существование пользователя
        updatedUser = new User(id, updatedUser.name, updatedUser.email, updatedUser.age);
        return userRepository.update(updatedUser);
    },

    delete: function (id) {
        const user = this.getById(id); // проверка на существование пользователя
        userRepository.delete(id);
    }
}