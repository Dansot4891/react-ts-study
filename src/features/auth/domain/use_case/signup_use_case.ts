// domain/usecases/sign_out.usecase.ts
import type { UserType } from "../../data/dto/user_type";
import { authRepo } from "../../domain/repo/auth_repo";

export class SignupUseCase {
  constructor() {}

  async execute(email: string, pw: string): Promise<UserType> {
    return await authRepo.signup(email, pw);
  }
}