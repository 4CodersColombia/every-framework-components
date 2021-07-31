import { storiesOf } from '@storybook/html';
import readme from './readme.md';

storiesOf('my-component', module).add(
  'Default',
  () =>
    '<my-component first="Millie" middle="Bobby" last="Brown"></my-component>',
  {
    notes: {
      markdown: readme,
    },
  },
)

storiesOf('my-component', module).add(
  'light',
  () =>
    '<h1>buena la rata</h1>',

);
