import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
	res.json({message: 'Details of a specific order here'});
});

router.post('/', (req, res) => {
	res.json({message: 'Place a new order here'});
})

export default router;
