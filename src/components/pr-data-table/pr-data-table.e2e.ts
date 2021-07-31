import { newE2EPage } from '@stencil/core/testing';

describe('pr-data-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pr-data-table></pr-data-table>');
    const element = await page.find('pr-data-table');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
