import { JwtPayload } from 'jsonwebtoken'
import { TokenType } from '~/constants/enums'

export interface LoginReqBody {
  email: string
  password: string
}

export interface VerifyEmailReqBody {
  email_verify_token: string
}
export interface RegisterReqBody {
  name: string
  email: string
  password: string
  confirm_Password: string
  date_of_birth: string
}
export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
}

export interface ForgotPasswordReqBody {
  email: string
}
export interface LogoutReqBody {
  refresh_token: string
}
