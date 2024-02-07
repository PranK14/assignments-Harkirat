const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
     await Admin.create({
    username: req.body.username,
    password: req.body.password,
  })
  
  res.json({
    message: 'Admin created successfully',
  })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
   // try{
      const isUser = await Admin.find({ username, password });

      if(!isUser) {
        res.status(403).json({ msg: "User Not Found" })
      }

      const token = jwt.sign({
        username
      }, process.env.JWT_KEY)

      res.json({ token })
  // } catch(e) {
  //   res.json({ msg: "SomeError Occured", error: e})
  // }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
       const course = await Course.create({
    title: req.body.title,
    course: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  })
  res.json({
    message: 'Course created successfully',
    courseId: course._id,
  })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({})
  res.json({
    courses: allCourses,
  })
});

module.exports = router;