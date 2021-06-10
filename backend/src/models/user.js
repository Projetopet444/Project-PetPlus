const mongoose = require('../database');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    birth_year: {
        type: Number,
        min: 1900,
        max: 2003,
    },

    contact: {
        type: Number,
        validate: {
            validator: function (v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} não é um número válido de 10 dígitos!'
        }
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});


UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
