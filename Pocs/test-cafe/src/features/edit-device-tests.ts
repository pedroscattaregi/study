import { environment } from '../../config/environment';
import { fixture, t, test } from 'testcafe';
import devicesListPage from '../pages/devices-list-page';
import { DevicesApiService } from '../utils/api/devices-api-service';

fixture`Getting Started`
  .page`${environment.APPLICATION_BASE_URL}/`;

test('Edit a device name through the API', async () => {
    
  // Generating test data
  const deviceNewName = "Renamed Device";
  
  // Getting the first Device on list from UI
  const device = await devicesListPage.getFirstListDevice();

  // Updating the Device Name
  const devicesApiClient = new DevicesApiService();
  await devicesApiClient.update(device.id, deviceNewName, device.type, device.capacity);

  // Verifying that the update works on UI
  await t.navigateTo("/");
  const isDeviceDisplayed = await devicesListPage.isDeviceDisplayed(deviceNewName, device.type, device.capacity);
  await t.expect(isDeviceDisplayed).eql(true);
});