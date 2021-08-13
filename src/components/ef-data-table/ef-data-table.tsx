import { Component, h, Host, Prop } from '@stencil/core';
@Component({ tag: 'ef-data-table', styleUrl: 'ef-data-table.css', shadow: true })
export class PrDataTable {
  @Prop() headers: { text: string; value: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
  @Prop() data: { [key: string]: string | number }[];
  renderRowData(dataRow: { [key: string]: string | number }, key: number) {
    return (
      <tr class="border-table">
        {this.headers.map(header => {
          if (header.slot) {
            return <td>{header.slot(dataRow)}</td>;
          } else {
            return (
              <td>
                <slot name={`${dataRow[header.value]}${key}`}>{dataRow[header.value]}</slot>
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
      </Host>
    );
  }
}
