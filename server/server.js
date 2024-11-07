const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);
console.log("Loaded PORT:", process.env.PORT);


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cardsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});
console.log("MONGODB_URI:", process.env.MONGODB_URI);

// Sample route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const Card = require('./models/Card');

// Get all cards
app.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get card by ID
app.get('/cards/:id', async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (card) res.json(card);
        else res.status(404).json({ message: 'Card not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new card
app.post('/cards', async (req, res) => {
    const card = new Card(req.body);
    try {
        const newCard = await card.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a card
app.put('/cards/:id', async (req, res) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedCard) res.json(updatedCard);
        else res.status(404).json({ message: 'Card not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a card
app.delete('/cards/:id', async (req, res) => {
    try {
        const deletedCard = await Card.findByIdAndDelete(req.params.id);
        if (deletedCard) res.json(deletedCard);
        else res.status(404).json({ message: 'Card not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
