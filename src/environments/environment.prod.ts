import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  mockServer: false,
  backend: {
    occ: {
      baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
      prefix: '/occ/v2/',
    },
  },
};
