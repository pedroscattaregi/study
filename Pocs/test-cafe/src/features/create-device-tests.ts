import { environment } from '../../config/environment';
import { fixture, t, test } from 'testcafe';
import devicesListPage from '../pages/devices-list-page';
import { Device } from '../utils/data/device-generator';
import createDevicePage from '../pages/create-device-page';

fixture`Getting Started`
  .page`${environment.APPLICATION_BASE_URL}/devices/add`;

test('Create a new device', async () => {
    
  // Generating test data
  const device = new Device();
  
  // Save device info
  await createDevicePage.create(device.name, device.type, device.capacity);

  // Verifying that the device is displayed
  const isDeviceDisplayed = await devicesListPage.isDeviceDisplayed(device.name, device.type, device.capacity);
  await t.expect(isDeviceDisplayed).eql(true);
});