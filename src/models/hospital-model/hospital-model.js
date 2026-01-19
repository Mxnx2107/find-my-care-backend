import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
    hospitalName: {type:String, require:true, unique: true },
    hospitalType: {type:String, require:true},
    hospitalFacilities: {type:String, require:true},
    departments: {type:String, require:true},
    state: {type:String, require:true},
    city: {type:String, require:true},
    address: {type:String, require:true},
    email: {type:String, require:true},
    certificate: { type: String },
    photos: { type: String },
    phoneNumber: { type: Number, require: true, unique: true },
})

export const Hospital = mongoose.model("Hospital",hospitalSchema);