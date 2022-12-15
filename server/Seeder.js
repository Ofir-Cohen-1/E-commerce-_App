// import React from 'react'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/Users.js'
import products from './data/Products.js'
import User from './models/UserModel.js'
import Product from './models/UserModel.js'
import Order from './models/OrderModel.js'
import connectDB from './config/Db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await User.insertMany(users)

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    procces.exit()
  } catch (error) {
    console.error(`${error}.red.inverse`)
    procces.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await User.insertMany(users)

    console.log('Data Destroyed!'.red.inverse)
    procces.exit()
  } catch (error) {
    console.error(`${error}.red.inverse`)
    procces.exit(1)
  }
}

if (procces.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
