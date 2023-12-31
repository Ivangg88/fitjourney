import jwt from 'jsonwebtoken'
import { appConfig } from '../../config/envs'

export const verifyToken = (token: string): boolean => {
  try {
    jwt.verify(token, appConfig.jwtKey)
    return true
  } catch (e) {
    return false
  }
}
