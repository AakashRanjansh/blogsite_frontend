process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/api/Blog/GetBlogs', async (req, res) => {
    try {
        const fetch = (await import('node-fetch')).default; // Dynamic import
        const response = await fetch('https://localhost:7124/api/Blog/GetBlogs');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
