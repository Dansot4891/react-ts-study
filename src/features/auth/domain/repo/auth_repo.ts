// data/auth.repo.ts
import { authApi } from "../../data/api/auth_api";
import type { UserType } from "../../data/dto/user_type";


export const authRepo = {
  async login(email: string, pw: string): Promise<UserType> {
    const userCredential = await authApi.login(email, pw);
    return { email: userCredential.user.email ?? "", displayName: userCredential.user.displayName ?? "" };
  },
  async signup(email: string, pw: string): Promise<UserType> {
    const userCredential = await authApi.signup(email, pw);
    return { email: userCredential.user.email ?? "", displayName: userCredential.user.displayName ?? "" };
  },
  async logout(): Promise<void> { await authApi.logout(); },
};