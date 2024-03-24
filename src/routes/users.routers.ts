import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapAsyn } from '~/utils/handlers'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
/**
 * Description. Register a new user
 * Path: /register
 * Method: POST
 * body: {name: string, email: string, password: string, conform_password: string,
 * date_of_birth: ISO8601}
 */

usersRouter.post('/register', registerValidator, wrapAsyn(registerController))

export default usersRouter
