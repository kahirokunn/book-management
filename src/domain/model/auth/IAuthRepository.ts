export abstract class IAuthRepository {
  public abstract loginWithEmailAndPassword(email: string, password: string): Promise<Identifier>
  public abstract login(): Promise<Identifier>
  public abstract createAuthInfoWithEmailAndPassword(emailAddress: string, password: string): Promise<Identifier>
}
