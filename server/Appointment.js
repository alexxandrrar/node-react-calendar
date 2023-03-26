import mongoose, { Schema } from "mongoose";

const Appointment = new Schema({
    content: { type: String, required: 'Appointment content is required' },
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
})


export default mongoose.model('Appointment', Appointment)