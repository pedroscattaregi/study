import { CONSTS } from '../../config/consts';
import { Selector } from 'testcafe';

const listDevices = ('.list-devices');
const deviceMainBox = ('.device-main-box');
const deviceName = ('.device-name');
const deviceType = ('.device-type');
const deviceCapacity = ('.device-capacity');
const deviceEditAction = ('.device-edit');
const deviceDeleteAction = ('.device-remove');

class DeviceActions {
  private editAction: Selector;
  private deleteAction: Selector;
  
  public constructor (name: string) {
    this.editAction = Selector(deviceName).withExactText(name).parent(deviceMainBox).find(deviceEditAction);
    this.deleteAction = Selector(deviceName).withExactText(name).parent(deviceMainBox).find(deviceDeleteAction);
  }
  public async exists(): Promise<boolean> {
    return await this.editAction.exists && await this.deleteAction.exists;
  }
}

class Device {
  private name: Selector;
  private type: Selector;
  private capacity: Selector;
  public deviceActions?: DeviceActions;
  
  public constructor (name: string, type: string, capacity: string) {
    this.name = Selector(deviceName).withExactText(name);
    this.type = Selector(deviceName).withExactText(name).parent(deviceMainBox).find(deviceType).withExactText(type);
    this.capacity = Selector(deviceName).withExactText(name).parent(deviceMainBox).find(deviceCapacity).withText(`${capacity}`);
    this.deviceActions = new DeviceActions(name);
  }
  public async exists(): Promise<boolean> {
    return await this.name.exists && await this.type.exists && await this.capacity.exists;
  }
}

class DevicesListPage {
  public listDevices: Selector;
    
  public constructor () {
    this.listDevices = Selector(listDevices);
  }

  public async isDeviceDisplayed(name: string, type: string, capacity: string): Promise<boolean> {
    const device = new Device(name, type, capacity);
    return await device.exists();
  }

  public async isDeviceActionsDisplayed(deviceName: string): Promise<boolean> {
    const deviceActions = new DeviceActions(deviceName);
    return await deviceActions.exists();
  }

  public async getFirstListDevice(): Promise<Record<string, any>> {
    const editUrl = await Selector(deviceEditAction).getAttribute("href");
    const idArgumentIndex = 3;
    const id = editUrl?.split("/")[idArgumentIndex];
    const name = await Selector(deviceEditAction).parent(deviceMainBox).find(deviceName).innerText;
    const type = await Selector(deviceEditAction).parent(deviceMainBox).find(deviceType).innerText;
    const capacityArgumentIndex = 0;
    const capacity = (await Selector(deviceEditAction).parent(deviceMainBox).find(deviceCapacity).innerText).split(" ")[capacityArgumentIndex];
    
    return {
      id: id,
      name: name,
      type: type,
      capacity: capacity
    };
  }

  public async getLastListDevice(): Promise<Record<string, any>> {
    const editUrl = await Selector(listDevices).child(CONSTS.LAST_ELEMENT_INDEX).find(deviceEditAction).getAttribute("href");
    const idArgumentIndex = 3;
    const id = editUrl?.split("/")[idArgumentIndex];
    const name = await Selector(listDevices).child(CONSTS.LAST_ELEMENT_INDEX).find(deviceName).innerText;
    const type = await Selector(listDevices).child(CONSTS.LAST_ELEMENT_INDEX).find(deviceType).innerText;
    const capacityArgumentIndex = 0;
    const capacity = (await Selector(listDevices).child(CONSTS.LAST_ELEMENT_INDEX).find(deviceCapacity).innerText).split(" ")[capacityArgumentIndex];
    
    return {
      id: id,
      name: name,
      type: type,
      capacity: capacity
    };
  }
}

export default new DevicesListPage();