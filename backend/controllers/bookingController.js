const Booking = require('../models/Booking');

// @route   POST api/bookings
// @desc    Create a booking
// @access  Public
exports.createBooking = async (req, res) => {
    const { name, email, phone, date, time, guests } = req.body;

    // Check for missing fields
    if (!name || !email || !phone || !date || !time || !guests) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const newBooking = new Booking({
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
