'use strict';

import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  +getConstants: () => {||};

  // your module methods go here, for example:
  getString(id: string): Promise<string>;
}

export default (TurboModuleRegistry.get<Spec>('SampleLibrary'): ?Spec);

export function getString(id: string): Promise<string> {
  return NativeModule.getString(id);
}
