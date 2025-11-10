const Booking = require('../models/Booking');

// @route   POST api/bookings
// @desc    Create a booking
// @access  Private
exports.createBooking = async (req, res) => {
    const { name, email, phone, date, time, guests } = req.body;

    // Check for missing fields
    if (!name || !email || !phone || !date || !time || !guests) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const newBooking = new Booking({
            user: req.user.id,
            name,
            email,
            phone,
            date,
            time,
            guests,
        });

        const booking = await newBooking.save();

        res.json(booking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @route   DELETE api/bookings/:id
// @desc    Delete a booking
// @access  Private
exports.deleteBooking = async (req, res) => {
    try {
        let booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({ msg: 'Booking not found' });
        }

        // Make sure user owns booking
        if (booking.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Booking.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Booking removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @route   GET api/bookings
// @desc    Get user bookings
// @access  Private
exports.getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id });
        res.json(bookings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
