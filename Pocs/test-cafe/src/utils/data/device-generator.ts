/* eslint @typescript-eslint/no-magic-numbers: 0 */ 
import * as casual from 'casual'; //https://www.npmjs.com/package/casual
import { deviceType } from './device-type';

export class Device {
  
  public get name(): string {
    return this._name;
  }
  
  public get type(): string {
    return this._type;
  }

  public get capacity(): string {
    return this._capacity;
  }
    
  private _name: string;

  private _type: string;

  private _capacity: string;
  
  public constructor() {
    
    const deviceTypeIndex = casual.integer(0, deviceType.length - 1);
    
    this._name = casual.first_name;
    this._type = deviceType[deviceTypeIndex];
    this._capacity = casual.integer(1, 1000).toString();
    
  }
}