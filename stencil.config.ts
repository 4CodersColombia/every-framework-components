import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'perritas-ricas-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-json',
      file: 'json/docs.json'
    },
    reactOutputTarget({
      componentCorePackage: '../',
      proxiesFile: './react/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
