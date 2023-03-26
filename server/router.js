import { Router } from "express";
import AppointmentController from "./AppointmentController.js";
const router = new Router();

router.post('/appointment', AppointmentController.create)
router.get('/appointments', AppointmentController.getAll)
router.get('/appointment/:id', AppointmentController.getOne)
router.put('/appointment/:id', AppointmentController.update)
router.delete('/appointment/:id', AppointmentController.delete)


export default router;