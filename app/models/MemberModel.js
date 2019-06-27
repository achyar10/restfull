import mongoose from 'mongoose'

const memberSchema = mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nocard: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    bdate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        default: 'MALE'
    },
    address: {
        street: String,
        city: String,
        postcode: String,
        province: String
    },
    ktp: String,
    npwp: String,
    bpjs: {
        tk: String,
        kes: String
    },
    point: {
        type: Number,
        default: 0
    },
    photo: String,
    imei: String,
    token: String,
    created_at: Date,
    updated_at: Date
})

export default mongoose.model('member', memberSchema)