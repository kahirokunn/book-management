import IAuthApplicationService from '@/boundaryInterface/authApplicationService/IAuthApplicationService';
import TYPES from '@/inversify/types';
import {diContainer} from '@/inversify/config';

export default class AuthApplicationService {
  public static getInstance(): IAuthApplicationService {
    return diContainer.get<IAuthApplicationService>(TYPES.IAuthApplicationService);
  }
}
