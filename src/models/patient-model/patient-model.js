import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    userName: {type:String, require:true},
    phoneNumber: { type: Number, require: true, unique: true },
    password: { type: String, require: true, },
})

export const Patient = mongoose.model("Patient",patientSchema);