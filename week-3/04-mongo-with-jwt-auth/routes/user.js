const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
     await User.create({
    username: req.body.username,
    password: req.body.password,
  })
  
  res.json({
    message: 'User created successfully',
  })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
     const {username, password} = req.body;
    try{
      const isUser = await User.findOne({ username: username });

      if(!isUser) {
        res.status(403).json({ msg: "User Not Found" })
      }

      const token = jwt.sign({
        _id: isUser._id,
        username: username
      }, process.env.JWT_KEY)

      res.json({ token: token})
  } catch(e) {
    res.json({ msg: "SomeError Occured", error: e})
  }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
     const allCourses = await Course.find({})
  res.json({
    courses: allCourses,
  })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId
  const user = req.headers.username
  const course = await Course.findById(id)

  if (course) {
    await User.updateOne(
      {
        username: user,
      },
      {
        $push: {
          purchasedCourses: id,
        },
      }
    )
    res.json({ message: 'Course purchased successfully' })
  } else {
    res.json({ message: 'No course of this id' })
  }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
    username: req.headers.username,
  })
  
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  })
  res.json({
    courses: courses,
  })
});

module.exports = router