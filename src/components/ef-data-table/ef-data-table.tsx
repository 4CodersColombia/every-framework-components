import { Component, h, Host, Prop, State } from '@stencil/core';
import { IMAGES_DATA_TABLE } from './constDataTable';
@Component({ tag: 'ef-data-table', styleUrl: 'ef-data-table.css', shadow: true })
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
    {
      text: 'Calories',
      value: 'calories',
      slot: (item: { [key: string]: string | number }) => {
        return <div style={{ backgroundColor: 'green', width: '100px', color: 'white' }}>{`hola ${item.calories}`}</div>;
      },
    },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
  ];
  @Prop() data: { [key: string]: string | number }[] = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1%',
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1%',
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: '7%',
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: '8%',
    },
    {
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      name: 'Gingerbread',
      iron: '16%',
    },
    {
      name: 'Jelly bean',
      carbs: 94,
      calories: 375,
      fat: 0.0,
      protein: 0.0,
      iron: '0%',
    },
    {
      name: 'Lollipop',
      iron: '2%',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
    },
    {
      calories: 408,
      carbs: 87,
      fat: 3.2,
      name: 'Honeycomb',
      protein: 6.5,
      iron: '45%',
    },
    {
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      name: 'Donut',
      iron: '22%',
    },
    {
      name: 'KitKat',
      calories: 518,
      iron: '6%',
      fat: 26.0,
      carbs: 65,
      protein: 7,
    },
  ];
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
