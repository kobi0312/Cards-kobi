const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String },  // במידה ויש צורך
    description: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    bizNumber: { type: String }, // במידה ויש צורך
    cardNumber: { type: Number, required: true },
    image: {
        url: { type: String, required: true },
        alt: { type: String },
    },
    likes: [String], // במידה ומערכת הלייקים קיימת
    user_id: { type: String }, // במידה והכרטיס קשור למשתמש מסוים
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
