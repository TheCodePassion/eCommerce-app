import mongoose from 'mongoose'

const connectDatabase = async () => {
  try {
    const connections = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('MongoDb Connected')
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
export default connectDatabase
