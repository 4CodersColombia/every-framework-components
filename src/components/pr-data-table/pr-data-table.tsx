import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'pr-data-table',
  styleUrl: 'pr-data-table.css',
})
export class PrDataTable{
  @Prop() headers: {text: string, value: string}[] = [
    {
      text: 'Dessert (100g serving)',
      value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' }
  ]
  @Prop() data: {[key: string]: string | number}[] = [
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
      fat: 3.2,
      carbs: 87,
      name: 'Honeycomb',
      protein: 6.5,
      iron: '45%',
    },
    {
      calories: 452,
      fat: 25.0,
      carbs: 51,
      name: 'Donut',
      protein: 4.9,
      iron: '22%',
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      iron: '6%',
      carbs: 65,
      protein: 7,
    },
  ];

  renderRowData(dataRow: Object) {
    const dataSorted = this.headers.map((header)=>{
      return dataRow[header.value]
    })
    return (
      <tr class="border-table">
        {dataSorted.map((item)=>(
          <td>{item}</td>
        ))}
      </tr>
    )
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
          <tbody class="table-body">
            {this.data.map(item => (
              this.renderRowData(item)
            ))}
          </tbody>
        </table>
      </Host>
    );
  }
}
