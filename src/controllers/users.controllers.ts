import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import User from '~/models/schemas/User.schema'
import { RegisterReqBody } from '~/models/requests/User.requests'
import databaseService from '~/services/database.services'
import userSevice from '~/services/users.services'
import { ObjectId } from 'mongodb'
import { USERS_MESSAGES } from '~/constants/messages'
export const loginController = async (req: Request, res: Response) => {
  const user = req.user as User
  const user_id = user._id as ObjectId
  const result = await userSevice.login(user_id.toString())
  return res.json({
    message: USERS_MESSAGES.LOGIN_SUCCESS_MESSAGE,
    result
  })
}
export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await userSevice.register(req.body)
    return res.json({
      message: USERS_MESSAGES.REGISTER_SUCCESS_MESSAGE,
      result
    })
  } catch (error) {
    next(error)
  }
}
