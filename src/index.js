import getPanelModule from "./getPanelModule.js";
import commandsModule from "./commandsModule";

// TODO -> Inject these using webpack from package.json
const id = "@ohif-test/extension-clock";
const version = "1.0.5";

export default {
    /**
     * Only to required properties. Should be a unique value across all extensions.
     */
    id,
    version,
    getPanelModule,
    getCommandsModule({ servicesManager, commandsManager }) {
        return commandsModule({ servicesManager, commandsManager });
    }
};
