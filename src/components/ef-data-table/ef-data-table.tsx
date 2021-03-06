import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';
@Component({
  tag: 'ef-data-table',
  styleUrl: 'ef-data-table.css',
  shadow: true,
})
export class PrDataTable<T> {
  @Prop() headers: { text: string; value: string; width?: string }[];
  @Prop() data: any[];
  @Prop() urlIconArrow: string = EVERYFRAMEWORKICONS['ARROW_DOWN'];
  @State() array_drawer_item: boolean[] = Array.from({ length: this.getLengthData() }, () => false);

  componentWillLoad() {
    this.array_drawer_item = Array.from({ length: this.getLengthData() }, () => false);
  }
  @Watch('data')
  watchPropHandler(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) this.array_drawer_item = Array.from({ length: this.getLengthData() }, () => false);
  }
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

  renderRowData(dataRow: T, key: number) {
    return (
      <tr class="border-table">
        {this.headers.map(header => {
          return (
            <td key={`${key}${header.value}`} class={this.array_drawer_item[key] ? 'open' : 'close'} style={{ width: header.width || 'auto' }}>
              <span class="before-content-table">{header.text}</span>
              <slot name={`${key}${header.value}`}>{dataRow[header.value]}</slot>
              {this.getArrowDrawer(key)}
            </td>
          );
        })}
      </tr>
    );
  }
  render() {
    return (
      <Host>
        <table id="ef-data-table" class="table" style={{ width: '100%' }}>
          <thead class="head-table">
            <tr class="border-table">
              {this.headers.map(header => (
                <th class="ef-data-table__header" key={header.value} style={{ width: header.width || 'auto' }}>
                  {header.text}
                </th>
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
