import getPanelModule from './getPanelModule.js';
import commandsModule from './commandsModule';
import id from './id';

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id,
  getPanelModule,
  getCommandsModule({ servicesManager, commandsManager }) {
    return commandsModule({ servicesManager, commandsManager });
  },
};
