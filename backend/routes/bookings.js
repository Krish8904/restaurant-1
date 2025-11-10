const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
  createBooking,
  getUserBookings,
  deleteBooking,
} = require('../controllers/bookingController');

// @route   POST api/bookings
// @desc    Create a booking
// @access  Private
router.post('/', auth, createBooking);

// @route   GET api/bookings
// @desc    Get user bookings
// @access  Private
router.get('/', auth, getUserBookings);

// @route   DELETE api/bookings/:id
// @desc    Delete a booking
// @access  Private
router.delete('/:id', auth, deleteBooking);

module.exports = router;
