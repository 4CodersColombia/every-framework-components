import { Component, h, Host, Prop, State } from '@stencil/core';
@Component({
  tag: 'ef-data-table',
  styleUrl: 'ef-data-table.css',
  shadow: true,
})
export class PrDataTable {
  @Prop() headers: { text: string; value: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[] = [
    {
      text: 'Dessert (100g serving)',
      value: 'name',
      slot: (item: { [key: string]: string | number }) => {
        return <button>{`hola ${item.name}`}</button>;
      },
    },
    { text: 'Calories', value: 'calories' },
  ];
  @Prop() data: { [key: string]: string | number }[] = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
  ];
  @Prop() urlIconArrow: string;
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

  getImageArrowAlign(open: boolean) {
    return open ? 'icon-arrow-up' : 'icon-arrow';
  }

  getIconArrow(open: boolean, index: number) {
    return open ? (
      <i onClick={this.setDrawerStateItem.bind(this, index)} class="fas fa-chevron-up icon-arrow"></i>
    ) : (
      <i onClick={this.setDrawerStateItem.bind(this, index)} class="fas fa-chevron-down icon-arrow"></i>
    );
  }
  getArrowDrawer(index: number) {
    if (this.urlIconArrow) {
      return <img onClick={this.setDrawerStateItem.bind(this, index)} src={this.urlIconArrow} alt="arrow_down" class={this.getImageArrowAlign(this.array_drawer_item[index])} />;
    }
    return this.getIconArrow(this.array_drawer_item[index], index);
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
                {this.getArrowDrawer(key)}
              </td>
            );
          } else {
            return (
              <td class={this.getDrawerStateItem(key)}>
                <span class="before-content-table">{header.text}</span>
                <slot name={`${dataRow[header.value]}${key}`}>{dataRow[header.value]}</slot>
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
