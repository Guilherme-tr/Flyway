const mongoose = require('../../database');



const VooSchema = new mongoose.Schema({
    destino: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    escala: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Voo = mongoose.model('Voo', VooSchema);

module.exports = Voo;