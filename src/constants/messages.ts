export const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  NAME_IS_REQUISTED: 'Name is requisted',
  NAMWE_MUST_BE_A_STRING: 'Name must be a string',
  EMAIL_ALREADY_EXISTENT: 'Email already existent',
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: 'Name must be from 1 to 100 characters',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_INVALID: 'Email is invalid',
  EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email or password incorrect',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_A_STRING: 'Password must be a string',
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Password must be between 6 and 50 characters',
  PASSWORD_MUST_BE_STRONG: 'Password must 6-50 characters, at least 1 lowercase, 1 uppercase, 1 number, 1 symbol',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_BE_A_STRING: 'Confirm password must be a string',
  CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Confirm password must be between 6 and 50 characters',
  CONFIRM_PASSWORD_MUST_BE_STRONG:
    'Confirm password must 6-50 characters, at least 1 lowercase, 1 uppercase, 1 number, 1 symbol',
  CONFIRM_PASSWORD_MUST_BE_THE_SAME_AS_PASSWORD: 'Confirm password must be the same as password',
  DATE_OF_BIRTH_MUST_BE_ISO8601: 'Date of birth must be in ISO8601 format',
  LOGIN_SUCCESS_MESSAGE: 'Login success',
  REGISTER_SUCCESS_MESSAGE: 'Register success',
  ACCESS_TOKEN_IS_REGISTERED: 'Access token is registered'
} as const
