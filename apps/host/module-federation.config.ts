import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

type ModuleFederationConfig = ConstructorParameters<typeof ModuleFederationPlugin>[0];

const config: ModuleFederationConfig = {
  name: 'host',
  filename: 'remoteEntry.js',
  remotes: {
    // Load in build time
    'products': 'products@http://localhost:4201/mf-manifest.json',
  },
  shared: ["react", "react-dom"],
};

export default config;