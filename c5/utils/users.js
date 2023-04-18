const fs = require('fs');

const loadUser = () => {
    const filebuffer = fs.readFileSync('./database/database.json');
    const users = JSON.parse(filebuffer)
    return users;
}

const saveUser = (users) => {
    fs.writeFileSync('./database/database.json', JSON.stringify(users));
}

const addUser = (user) => {
    const users = loadUser();
    users.push(user);
    saveUser(users);
}
module.exports = {loadUser,addUser}