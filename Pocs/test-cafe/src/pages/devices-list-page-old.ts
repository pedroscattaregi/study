import { Selector } from 'testcafe';

// NOT BEING USED FOR THIS POC, JUST ANOTHER PAGE OBJECTS EXAMPLE
class DevicesListPage {

  private readonly deviceMainBox = '.device-main-box';
  private readonly name = ".device-name";
  private readonly type = ".device-type";
  private readonly capacity = ".device-capacity";

  public async isDeviceInfoDisplayed(name: string, type: string, capacity: number): Promise<boolean> {
    const deviceName = await Selector(this.name).withExactText(name).exists;
    const deviceType = await Selector(this.name).withExactText(name).parent(this.deviceMainBox).find(this.type).withExactText(type).exists;
    const deviceCapacity = await Selector(this.name).withExactText(name).parent(this.deviceMainBox).find(this.capacity).withText(`${capacity}`).exists;
    return deviceName && deviceType && deviceCapacity;
  }

  public async isDeviceActionsDisplayed(name: string): Promise<boolean> {
    const editActionButton = 
        await Selector(this.name)
          .withExactText(name)
          .parent('.device-main-box')
          .child('.device-options')
          .child('.device-remove')
          .exists;
    const deleteActionButton = 
        await Selector(this.name)
          .withExactText(name)
          .parent('.device-main-box')
          .child('.device-options')
          .child('.device-edit')
          .exists;
    return editActionButton && deleteActionButton;
  }
}

export default new DevicesListPage();