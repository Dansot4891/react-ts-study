// domain/usecases/sign_out.usecase.ts  
import { authRepo } from "../repo/auth_repo";

export class SignOutUseCase {
  constructor() {}

  async execute(): Promise<void> {
    return await authRepo.logout();
  }
}