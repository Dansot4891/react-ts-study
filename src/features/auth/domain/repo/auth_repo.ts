// data/auth.repo.ts
import { authApi } from "../../data/api/auth_api";
export type User = { email?: string };

export const authRepo = {
  async login(email: string, pw: string): Promise<User> {
    const { user } = await authApi.login(email, pw);
    return { email: user.email ?? undefined };
  },
  async signup(email: string, pw: string): Promise<User> {
    const { user } = await authApi.signup(email, pw);
    return { email: user.email ?? undefined };
  },
  async logout(): Promise<void> { await authApi.logout(); },
};