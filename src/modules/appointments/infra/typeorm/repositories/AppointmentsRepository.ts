import Appointment from "@modules/appointments/infra/typeorm/entities/appointment";
import {getRepository,Repository} from 'typeorm'

import IAppoinmentsRepositories from "@modules/appointments/repositories/IAppoinmentsRepositories"
import ICreateAppointmentsDTO from '@modules/appointments/dtos/ICreateAppointmentsDTO'




class AppointmentsRepository implements IAppoinmentsRepositories{
    private ormRepository: Repository<Appointment>;

    constructor(){
        this.ormRepository = getRepository(Appointment)
    }

    public async findByDate(date:Date):Promise<Appointment|undefined>{
      
        const findAppointment = await this.ormRepository.findOne({
            where:{date}
        })
        return findAppointment  || undefined  ;
    }


    public async create({date,provider_id}:ICreateAppointmentsDTO): Promise<Appointment>{
        const appointament = this.ormRepository.create({provider_id,date})

        await this.ormRepository.save(appointament)

        return appointament;
    }
    
}

export default AppointmentsRepository