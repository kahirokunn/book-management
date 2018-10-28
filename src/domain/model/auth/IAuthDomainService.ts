export default interface IAuthDomainService {
  loginWithEmailAndPassword(email: string, password: string): Promise<Identifier>;
  login(): Promise<Identifier>;
}
