import { application, Router } from "express";

import userRouter from "@modules/users/infra/http/routes/adm.routes";
import users_bv_Router from "@modules/users/infra/http/routes/user.routes";
import sessions from "@modules/users/infra/http/routes/sessions.routes";
import user_offices from "@modules/users/infra/http/routes/user_offices.routes"
import product from "@modules/products/infra/http/routes/product.routes";
import atributeProduct from "@modules/productAtributes/infra/http/routes/product._atributes.routes";
import appointmentsRouter from "@modules/appointments/infra/http/routes/appointments.routes";

import offer from "@modules/offers/infra/http/routes/offers.routes";
import negotiation from '@modules/negotiations/infra/http/routes/negotiation.routes'
const routes = Router()


routes.use('/appointments',appointmentsRouter)
routes.use('/admin',userRouter)
routes.use('/users',users_bv_Router)
routes.use('/sessions',sessions)
routes.use('/offices',user_offices)
routes.use('/product',product)
routes.use('/atributeofproduct',atributeProduct)
routes.use('/offer',offer)
routes.use('/negotiation',negotiation)


export default routes
