const router = require('express').Router();
const User = require('../models/user'); 
const bcrypt = require('bcryptjs');

router.post('/register', async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hashSync(password);
        const user = new User({ name, email, password: hashedPassword });
        await user.save().then(()=>
            res.status(201).json({ user: user})
        );
        }
    catch (error) {
        res.status(400).json({ message: 'user already exists' });
        }
});

router.post('/log-in', async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: 'sign up first' });
        }
        const isPasswordValid = await bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'invalid credentials' });
        }
        const{ password, ...others } = user._doc;
        res.status(200).json({ others } );
    }
    catch (error) {
        res.status(400).json({ message: 'user already exists' });
        }
});

module.exports = router;