import mongoose from 'mongoose'
import logger from './logger.js'

const connect = async () => {
   try {
      // for mongo docker image
      // const connect = mongoose.connect(
      //    'mongodb://mongo:27017/docker-node-mongo',
      //    { useNewUrlParser: true }
      // )

      //for mongodb atlas
      const conn = mongoose.connect(
         process.env.MONGO_URI,
         {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
         },
         () => {
            logger.info(
               'Database connected successfully'
            )
         }
      )
   } catch (e) {
      console.error(
         `Database connection failed ${e}`
      )
   }
}

export default connect
