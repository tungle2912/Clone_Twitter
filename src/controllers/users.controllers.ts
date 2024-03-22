import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import User from '~/models/User.schema'
import { RegisterReqBody } from '~/models/requests/User.requests'
import databaseService from '~/services/database.services'
import userSevice from '~/services/users.services'
export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'levantung' && password === '123') {
    return res.json({
      message: 'Login successful'
    })
  }
  return res.status(400).json({
    error: 'Login failed'
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await userSevice.register(req.body)
    return res.json({
      message: 'register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'register failed'
    })
  }
}
