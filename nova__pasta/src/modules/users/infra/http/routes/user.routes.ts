import  {  Router } from "express";
import {container} from 'tsyringe'
import CreateUserService from '@modules/users/services/CreateUserService'
import multer from "multer";
import uploadConfig from '@config/upload'
import UserController from "../controller/UsersController";
import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated'
import UserAvatarController from "../controller/UserAvatarController";
const users_bv_Router = Router();
const upload= multer(uploadConfig)
const userController = new UserController()
const userAvatarController = new UserAvatarController()

users_bv_Router.post('/',userController.create);
//users_bv_Router.use(ensureAuthenticated)
users_bv_Router.put('/:id',ensureAuthenticated,userController.update);
users_bv_Router.get('/',ensureAuthenticated,userController.all);
users_bv_Router.get('/:id',ensureAuthenticated,userController.view);
users_bv_Router.delete('/:id',ensureAuthenticated,userController.delete);

users_bv_Router.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update
);

export default users_bv_Router