import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  namespace:"pr-components",
  taskQueue: 'async',
  outputTargets: [{
    type: 'dist',
  },
  {
    type: 'docs-json',
    file: 'json/docs.json'
  }],
};
