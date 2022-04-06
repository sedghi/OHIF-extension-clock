import getPanelModule from './getPanelModule.js';
import commandsModule from './commandsModule';

import { id } from './id';

/**
 * You can remove any of the following modules if you don't need them.
 * You can remove any of the following modules if you don't need them.
 */
export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   * You ID can be anything you want, but it should be unique.
   */
  id,

  getPanelModule,
  getCommandsModule({ servicesManager, commandsManager }) {
    return commandsModule({ servicesManager, commandsManager });
  },
};
