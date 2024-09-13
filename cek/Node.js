const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));  // Untuk menghidangkan file HTML/CSS/JS di folder "public"

// Route untuk meng-handle request dari frontend
app.get('/api/check_account', async (req, res) => {
    const accountId = req.query.accountId;

    if (!accountId) {
        return res.status(400).json({ error: 'Account ID is required' });
    }

    try {
        const response = await fetch(`https://api.example.com/check_account?accountId=${accountId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'your-api-key-here'  // Masukkan API Key
            }
        });

        const data = await response.json();

        if (data.success) {
            res.json(data);
        } else {
            res.status(404).json({ error: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
