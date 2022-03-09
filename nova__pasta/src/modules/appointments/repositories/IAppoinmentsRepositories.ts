import Appointment from "../infra/typeorm/entities/appointment";
import ICreateAppointmentsDTO from '@modules/appointments/dtos/ICreateAppointmentsDTO'


export  default interface IAppoinmentsRepositories{
    create(data:ICreateAppointmentsDTO):Promise<Appointment>
    findByDate(date: Date): Promise<Appointment | undefined>;
}