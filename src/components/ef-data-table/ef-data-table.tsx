import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ef-data-table',
  styleUrl: 'ef-data-table.css',
})
export class PrDataTable {
  @Prop() headers: { text: string; value: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[]
  @Prop() data: { [key: string]: string | number }[]

  renderRowData(dataRow: { [key: string]: string | number }) {
    return (
      <tr class="border-table">
        {this.headers.map(header => {
          if(header.slot){
            return (
              <td>{header.slot(dataRow)}</td>
            )
          }
          else{
            return (
              <td>{dataRow[header.value]}</td>
            )
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
          <tbody class="table-body">{this.data.map(item => this.renderRowData(item))}</tbody>
        </table>
      </Host>
    );
  }
}
