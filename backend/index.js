import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const port = process.env.PORT || 8000; 

//filepath workaround for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//setup static files from React app
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Handle all other routes with index.html (client-side routing)
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

app.listen(port, () => console.log(`server is running on port: ${port}`));