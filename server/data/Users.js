import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ofir Cohen',
    email: 'ofirexample.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sivan Cohen',
    email: 'sivan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
