import { Component, h, Host, Prop, State } from '@stencil/core';
import { IMAGES_DATA_TABLE } from './constDataTable';
@Component({ tag: 'ef-data-table', styleUrl: 'ef-data-table.css', shadow: true })
export class PrDataTable {
  @Prop() headers: { text: string; value: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
  @Prop() data: { [key: string]: string | number }[];
  @Prop() icon_arrow: string = IMAGES_DATA_TABLE['ARROW_DOWN'];

  @State() array_drawer_item: boolean[] = Array.from({ length: this.getLengthData() }, () => false);

  getLengthData() {
    return this.data ? this.data.length : 0;
  }
  getDrawerStateItem(index) {
    return this.array_drawer_item[index] ? 'open' : 'close';
  }
  setDrawerStateItem(index) {
    this.array_drawer_item = this.array_drawer_item.map((item, indexItem) => {
      return index == indexItem ? !item : item;
    });
  }
  getIconArrowDrawer(index) {
    return this.array_drawer_item[index] ? IMAGES_DATA_TABLE['ARROW_UP'] : IMAGES_DATA_TABLE['ARROW_DOWN'];
  }
  renderRowData(dataRow: { [key: string]: string | number }, key: number) {
    return (
      <tr class="border-table">
        {this.headers.map(header => {
          if (header.slot) {
            return (
              <td class={this.getDrawerStateItem(key)}>
                <span class="before-content-table">{header.text}</span>
                {header.slot(dataRow)}
                <img onClick={this.setDrawerStateItem.bind(this, key)} src={this.getIconArrowDrawer(key)} alt="arrow_down" class="icon-arrow" />
              </td>
            );
          } else {
            return (
              <td class={this.getDrawerStateItem(key)}>
                <span class="before-content-table">{header.text}</span>
                <slot name={`${dataRow[header.value]}${key}`}>{dataRow[header.value]}</slot>
                <img onClick={this.setDrawerStateItem.bind(this, key)} src={this.icon_arrow} alt="arrow_down" class="icon-arrow" />
              </td>
            );
          }
        })}
      </tr>
    );
  }
  render() {
    return (
      <Host>
        <table id="example" class="table" style={{ width: '100%' }}>
          <thead class="head-table">
            <tr class="border-table">
              {this.headers.map(header => (
                <th>{header.text}</th>
              ))}
            </tr>
          </thead>
          <tbody class="table-body">{this.data.map((item, key) => this.renderRowData(item, key))}</tbody>
        </table>
        <slot name="ef-data-table-footer"></slot>
      </Host>
    );
  }
}
