const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
    res.json({ message: 'Hello World from products service' })
})

app.listen(3000, () => console.log('listening on port 3000'));


