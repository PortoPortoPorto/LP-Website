import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
	res.json({message: 'Register a new user here'});
});

router.post('/login', (req, res) => {
	res.json({message: 'Login here'});
})

export default router;
