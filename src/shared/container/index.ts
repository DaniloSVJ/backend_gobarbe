import {container} from "tsyringe"

import IAppoinmentsRepositories from "@modules/appointments/repositories/IAppoinmentsRepositories"
import AppointmentsRepository from "@modules/appointments/infra/typeorm/repositories/AppointmentsRepository"

import IUsersRepository from "@modules/users/repositories/IUsersRepository"
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository"

container.registerSingleton<IAppoinmentsRepositories>(
    'AppointmentsRepository',
    AppointmentsRepository
);
container.registerSingleton<IUsersRepository>(
        'UsersRepository',
        UsersRepository
);    