const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve your static files (HTML, CSS, JS)
app.use(express.static('public'));

// Additional API route
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
