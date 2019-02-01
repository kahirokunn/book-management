export abstract class IAuthDomainService {
  public abstract isEmailVerified(): boolean
  public abstract sendEmailVerification(): Promise<void>
}
