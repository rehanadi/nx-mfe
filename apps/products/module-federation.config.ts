import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './RemoteButton': './src/components/RemoteButton.tsx',
  }
};

export default config;