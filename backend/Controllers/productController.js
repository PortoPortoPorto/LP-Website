import asyncHandler from 'express-async-handler';

// @desc Get Products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async(req, res) => {
	const products = {id: 1, name: coolWand}
	console.log(getProducts);
	res.status(200).json(products);
})


export default  getProducts 