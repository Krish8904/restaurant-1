const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', registerUser);

// @route   POST api/users/login
// @desc    Login user / returns token
// @access  Public
router.post('/login', loginUser);

// @route   GET api/users/me
// @desc    Get current user
// @access  Private
router.get('/me', auth, getMe);

module.exports = router;
