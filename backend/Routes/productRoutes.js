import express from 'express';
const router = express.Router();
import getProducts from '../Controllers/productController.js';


router.get('/', (req, res) => {
	res.json({message: 'All products displayed here'});
});

router.get('/:id', (req, res) => {
	res.json({message: 'Specific product displayed here'});
})


export default router;
