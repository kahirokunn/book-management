export default abstract class IAuthDomainService {
  public abstract loginWithEmailAndPassword(email: string, password: string): Promise<Identifier>
  public abstract login(): Promise<Identifier>
  public abstract isEmailVerified(): boolean
  public abstract createUserWithEmailAndPassword(emailAddress: string, password: string): Promise<Identifier>
  public abstract sendEmailVerification(): Promise<void>
}
