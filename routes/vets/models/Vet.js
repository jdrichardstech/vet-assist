const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VetSchema = new Schema({
    email: { type: String, unique: true, lowercase: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    picture: { type: String, default: '', trim: true },
    address: { type: String, default: '(Please update address)', trim: true },
    city: { type: String, default: '(Please update city)', trim: true },
    state: { type: String, default: '(Please update state)', trim: true },
    classification: { type: String, default: ''},
    certs: {type: String, default: ''}
  
})

module.exports = mongoose.model('Vet', VetSchema);