import { environment } from '../../config/environment';
import { fixture, t, test } from 'testcafe';
import devicesListPage from '../pages/devices-list-page';
import { DevicesApiService } from '../utils/api/devices-api-service';

fixture`Getting Started`
  .page`${environment.APPLICATION_BASE_URL}/`;

test('Delete a device name through the API', async () => {
  
  // Getting the first Device on list from UI
  const device = await devicesListPage.getLastListDevice();

  // Deleting the Device
  const devicesApiClient = new DevicesApiService();
  await devicesApiClient.delete(device.id);

  // Verifying that the delete works on UI
  await t.navigateTo("/");
  const isDeviceDisplayed = await devicesListPage.isDeviceDisplayed(device.name, device.type, device.capacity);
  await t.expect(isDeviceDisplayed).eql(false);
});