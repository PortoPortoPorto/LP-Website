import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import connectDB from './Config/db.js';
import productRoutes from './Routes/productRoutes.js';
import cartRoutes from './Routes/cartRoutes.js';
import orderRoutes from './Routes/orderRoutes.js';
import userRoutes from './Routes/userRoutes.js';

const port = process.env.PORT || 8000; 

connectDB();

//filepath workaround for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Routes for specific API requests
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/user', userRoutes)

//setup static files from React app
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Handle all other routes with index.html (client-side routing)
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});


app.listen(port, () => console.log(`server is running on port: ${port}`));