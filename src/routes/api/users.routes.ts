import {Router} from 'express'
import * as usersController from '../../controllers/users.controllers'

const router  = Router();

router.route('/').post(usersController.create)

export default  router;

