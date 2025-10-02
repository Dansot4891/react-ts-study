// domain/usecases/login.usecase.ts
import type { UserType } from "../../data/dto/user_type";
import { authRepo } from "../../domain/repo/auth_repo";

export class LoginUseCase {
  constructor() {}

  async execute(email: string, pw: string): Promise<UserType> {
    return await authRepo.login(email, pw);
  }
}