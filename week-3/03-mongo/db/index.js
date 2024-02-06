const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://priyank:VlW3yJvFS8OIJY5J@cluster0.yhlcvj4.mongodb.net/course-selling-app'
)

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
})

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    }],
})

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  descrpition: String,
  price: Number,
  imageLink: String,
})

const Course = mongoose.model('Course', CourseSchema)
const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
  Admin,
  User,
  Course,
}
