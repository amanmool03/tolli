import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
   {
      email: {
         type: String,
         required: [true, 'Email is required'],
         unique: true,
         match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
         ],
      },
      fullname: {
         type: String,
         required: [
            true,
            'First name is required',
         ],
         minLength: 3,
      },
      phone: {
         type: String,
      },
      password: {
         type: String,
         required: [
            true,
            'Please add a Password',
         ],
         required: true,
         select: false, // When we get a user its not gonna return password
      },
      status: {
         type: Boolean,
         default: true,
      },
      image: {
         type: String,
      },
   },
   { timestamps: true }
)
const User = mongoose.model('User', userSchema)
export default User
