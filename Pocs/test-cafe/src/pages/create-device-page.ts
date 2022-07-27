import { Selector, t } from 'testcafe';

const deviceForm = Selector('.device-form');
const deviceNameInput = Selector('#system_name');
const deviceTypeSelectBox = Selector('#type');
const deviceCapacityInput = Selector('#hdd_capacity');
const saveButton = Selector('.submitButton');

class CreateDevicePage {
  public deviceForm: Selector;
    
  public constructor () {
    this.deviceForm = deviceForm;
  }

  public async create(name: string, type: string, capacity: string): Promise<void> {
    await t
      .typeText(deviceNameInput, name)
      .click(deviceTypeSelectBox)
      .click(Selector(`[value=${type}]`))
      .typeText(deviceCapacityInput, capacity)
      .click(saveButton);
  }
}

export default new CreateDevicePage();