import mongoose from 'mongoose'

const connect = async () => {
   try {
      const connect = mongoose.connect(
         'mongodb://mongo:27017/docker-node-mongo',
         { useNewUrlParser: true }
      )
      console.log(
         'Database connected successfully'
      )
   } catch (e) {
      console.log(e)
   }
}

export default connect
