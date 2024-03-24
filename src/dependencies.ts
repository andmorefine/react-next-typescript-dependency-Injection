import { AuthService } from '@/modules/auth/authService'
import { AuthApi } from '@/modules/auth/authApi'

export type Dependencies = {
  authService: AuthService
}

export const dependencies: Dependencies = {
  authService: AuthApi,
}
