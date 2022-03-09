import ensureAuthenticated from "@shared/infra/http/middleware/ensureAuthenticated";
import  {  Router } from "express";
import AppointmentController from "../Controller/AppointmentsControllers";
const appointamentController = new AppointmentController()
const appointmentsRouter = Router();



// appointmentsRouter.get('/', async (request,response)=>{
//     const appointmentsRepository = getCustomRepository(AppointmentsRepository)
//     const appointment = await appointmentsRepository.find()
//     return response.json(appointment)
// })
appointmentsRouter.use(ensureAuthenticated)
appointmentsRouter.post('/',appointamentController.create);

export default appointmentsRouter