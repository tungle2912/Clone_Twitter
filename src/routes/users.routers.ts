import { Router } from 'express'
import {
  verifyEmailController,
  loginController,
  logoutController,
  registerController,
  resendVerifyEmailController,
  forgotPasswordController,
  verifyForgotPasswordController,
  resetPasswordController,
  getMeController
} from '~/controllers/users.controllers'
import {
  accessTokenValidator,
  emailVerifyTokenValidator,
  forgotPasswordValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator,
  verifyForgotPasswordTokenValidator,
  resetPasswordValidator
} from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))
/**
 * Description. Register a new user
 * Path: /register
 * Method: POST
 * body: {name: string, email: string, password: string, conform_password: string,
 * date_of_birth: ISO8601}
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

/**
 * Description. Logout a user
 * Path: /logout
 * Method: POST
 * header: { Authorization: Bearer ${access_token}
 * body: { refresh_token: string }
 */
usersRouter.post('/logout', accessTokenValidator, refreshTokenValidator, wrapRequestHandler(logoutController))

/**
 * Description. Verify email when user clinet click on the link in email
 * Path: /verify-email
 * Method: POST
 * body: { email_verify_token: string }
 */
usersRouter.post('/verify-email', emailVerifyTokenValidator, wrapRequestHandler(verifyEmailController))

/**
 * Description. resend-verify-email when user clinet click on the link in email
 * Path: /resend-verify-emaill
 * Method: POST
 * header: { Authorization: Bearer ${access_token}
 * body: {}
 */
usersRouter.post('/resend-verify-email', accessTokenValidator, wrapRequestHandler(resendVerifyEmailController))

/**
 * Description.submid email to reset password, sen email to user
 * Path: /forgot-password
 * Method: POST
 * body: {email: string}
 */
usersRouter.post('/forgot-password', forgotPasswordValidator, wrapRequestHandler(forgotPasswordController))

/**
 * Description.verify link in email to reset password
 * Path: /verify-forgot-password
 * Method: POST
 * body: {forgot_password_token: string}
 */
usersRouter.post(
  '/verify-forgot-password',
  verifyForgotPasswordTokenValidator,
  wrapRequestHandler(verifyForgotPasswordController)
)

/**
 * Description.reset password
 * Path: /reset-password
 * Method: POST
 * body: {forgot_password_token: string,forgot_password: string, confirm_forgot_password: string}
 */
usersRouter.post('/reset-password', resetPasswordValidator, wrapRequestHandler(resetPasswordController))

/**
 * Description.Get my profile
 * Path: /me
 * Method: GET
 * header: { Authorization: Bearer ${access_token}
 */
usersRouter.get('/me', accessTokenValidator, wrapRequestHandler(getMeController))

export default usersRouter
