
import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
           password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Lily Potter',
        email: 'lily@example.com',
    password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

console.log(users);

export default users;