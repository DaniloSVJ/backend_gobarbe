import Appointment  from "@modules/appointments/infra/typeorm/entities/appointment";
import {startOfHour} from 'date-fns'
import IAppoinmentsRepositories from '../repositories/IAppoinmentsRepositories'
import {injectable, inject} from 'tsyringe'
interface IRequest {
    provider_id:string;
    date:Date;
}
@injectable()
class CreateAppointmentService {
   
    constructor(
        @inject('AppointmentRepository')
       private appointmentsRepository:IAppoinmentsRepositories
    ){
       
    }
   
    public async execute({provider_id ,date}:IRequest):Promise<Appointment>{
        
        
        
        const appointmentDate =  startOfHour(date)

        const findAppintmentsInSameDate = await this.appointmentsRepository.findByDate(
            appointmentDate,
        )
        
        if (findAppintmentsInSameDate){
           throw Error("This appointament is already booked")
        }    
    
        const appointment = this.appointmentsRepository.create({
            provider_id,
            date:appointmentDate
        })
      

        return appointment
          
    }

}

export default CreateAppointmentService