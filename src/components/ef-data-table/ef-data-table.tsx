import { Component, h, Host, Prop, State } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';
@Component({
  tag: 'ef-data-table',
  styleUrl: 'ef-data-table.css',
  shadow: true,
})
export class PrDataTable {
  @Prop() headers: { text: string; value: string; slot?: any }[];
  @Prop() data: { [key: string]: string | number }[];
  @Prop() urlIconArrow: string = EVERYFRAMEWORKICONS['ARROW_DOWN'];
  @State() array_drawer_item: boolean[] = Array.from({ length: this.getLengthData() }, () => false);

  getLengthData() {
    return this.data ? this.data.length : 0;
  }
  setDrawerStateItem(index) {
    this.array_drawer_item = this.array_drawer_item.map((item, indexItem) => {
      return index == indexItem ? !item : item;
    });
  }

  getImageArrowAlign(open: boolean) {
    return open ? 'icon-arrow-up' : 'icon-arrow';
  }

  getArrowDrawer(index: number) {
    return <img onClick={this.setDrawerStateItem.bind(this, index)} src={this.urlIconArrow} alt="arrow_down" class={this.getImageArrowAlign(this.array_drawer_item[index])} />;
  }

  renderRowData(dataRow: { [key: string]: string | number }, key: number) {
    return (
      <tr class="border-table">
        {this.headers.map(header => {
          if (header.slot) {
            return (
              <td class={this.array_drawer_item[key] ? 'open' : 'close'}>
                <span class="before-content-table">{header.text}</span>
                {header.slot}
                {this.getArrowDrawer(key)}
              </td>
            );
          } else {
            return (
              <td class={this.array_drawer_item[key] ? 'open' : 'close'}>
                <span class="before-content-table">{header.text}</span>
                <slot name={`${key}${dataRow[header.value]}`}>{dataRow[header.value]}</slot>
                {this.getArrowDrawer(key)}
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
