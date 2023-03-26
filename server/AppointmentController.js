import AppointmentService from "./AppointmentService.js";

class AppointmentController{
    async create(req, res){
        try{
            const appointment = await AppointmentService.create(req.body)
            res.json(appointment)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async getAll(req, res){
        try{
            const appointments = await AppointmentService.getAll()
            return res.json(appointments)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async getOne(req, res){
        try{
            const {id} = req.params
            const appointment = await AppointmentService.getOne(id) 
            return res.json(appointment)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async update(req, res){
        try{
            const appointment = await AppointmentService.update(req.body, req.params.id)
            return res.json(appointment)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async delete(req, res){
        try{
            const {id} = req.params
            const appointment = await AppointmentService.delete(id)
            return res.json(appointment)
        }
        catch(e){
            res.status(500).json(e)
        }
    }
}


export default new AppointmentController()