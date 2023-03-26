import Appointment from "./Appointment.js";

class AppointmentService{
    async create(appointment){
        const createdAppointment = await Appointment.create(appointment)
        return createdAppointment
    }
    async getAll(){
        const appointments = await Appointment.find()
        return appointments
    }
    async getOne(id){
        if(!id){
            throw new Error('Id is not found')
        }
        const appointment = await Appointment.findById(id)
        return appointment
    }
    async update(appointment, id){
        if(!id){
            throw new Error('Id is not found')
        }
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, appointment)
        return updatedAppointment
    }
    async delete(id){
        if(!id){
            throw new Error('Id is not found')
        }
        const appointment = await Appointment.findByIdAndDelete(id)
        return appointment
    }
}


export default new AppointmentService()