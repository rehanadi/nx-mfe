import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

type ModuleFederationConfig = ConstructorParameters<typeof ModuleFederationPlugin>[0];

const config: ModuleFederationConfig = {
  name: 'products',
  filename: 'remoteEntry.js',
  exposes: {
    './RemoteButton': './src/components/RemoteButton.tsx',
    './Types': './src/types.d.ts',
  },
  shared: ["react", "react-dom"],
};

export default config;