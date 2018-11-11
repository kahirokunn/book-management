import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService';
import {diContainer} from '@/inversify/config';

export default class AuthApplicationService {
  public static getInstance(): IAuthApplicationService {
    return diContainer.get(IAuthApplicationService);
  }
}
