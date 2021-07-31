import docJson from '../json/docs.json';
import { extractArgTypes, extractComponentDescription, setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
if(docJson) setStencilDocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const parameters = {
//   controls: { hideNoControlsWarning: true },
//   docs: {
//     extractArgTypes,
//     extractComponentDescription,
//   }
// }