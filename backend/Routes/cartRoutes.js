import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.json({message: 'Cart displayed here'});
});

router.post('/', (req, res) => {
	res.json({message: 'add item to cart here'});
})

router.delete('/:id', (req, res) => {
	res.json({message: 'delete item from cart'});
})

export default router;
