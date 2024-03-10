import { Request, Response } from 'express'
export const loginController = (req: Request, res: Response) => {
 const {email, password}=(req.body);
  if(email==='levantung'&& password==='123'){
    return res.json({
    message: 'Login successful'
   })
  }
  return res.status(400).json({
    error:'Login failed'
  })
 
}
