import UserApplicationService from '@/serviceLocator/UserApplicationService';

export async function boot() {
  await UserApplicationService.getInstance().login();
}
