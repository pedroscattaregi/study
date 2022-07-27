import { environment } from '../../config/environment';
import { fixture, test } from 'testcafe';
import { DevicesApiService } from '../utils/api/devices-api-service';
import devicesListPage from '../pages/devices-list-page';

fixture`Getting Started`
  .page`${environment.APPLICATION_BASE_URL}/`;

test('Verify that all devices exists and contain the edit and delete buttons', async t => {
    
  // Retrieving the list of devices from API
  const devicesApiClient = new DevicesApiService();
  const devices = await devicesApiClient.getDevicesList();
    
  for(let index = 0; devices[index] !== undefined; index++) {
      
    // Verifying that all devices are displayed
    const isDeviceDisplayed = await devicesListPage.isDeviceDisplayed(devices[index].system_name, devices[index].type, devices[index].hdd_capacity);
    await t.expect(isDeviceDisplayed).eql(true);

    // Verifying that all devices has their actions displayed
    const isDeviceActionsDisplayed = await devicesListPage.isDeviceActionsDisplayed(devices[index].system_name);
    await t.expect(isDeviceActionsDisplayed).eql(true);
  }
});