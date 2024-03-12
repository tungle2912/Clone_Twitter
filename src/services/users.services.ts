import User from "~/models/User.schema"
import databaseService from "./database.services"

class UserSevice{
  async register(payload:{email:string, password:string}){
    const {email, password} =payload
    const result= await databaseService.users.insertOne(new User({
      email,
      password
    })
    )
    return result
  }
}
const userSevice =new UserSevice()
export default userSevice