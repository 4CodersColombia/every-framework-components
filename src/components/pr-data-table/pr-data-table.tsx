import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'pr-data-table',
  styleUrl: 'pr-data-table.css',
})
export class PrDataTable {
    @Prop() headers: string[]
    @Prop() data: { name: string, value: string | number }[][]

  renderTableIndex(index: number) {
    const dataArrayShort = this.headers.map((header)=>{
      if(this.data[index] !== undefined){
        var indexRow = this.data[index].find(x=>x.name === header)
        if(index !== undefined){
          return(indexRow.value)
        }
      }
    })
    return (
      <tr class="border-table">
        {dataArrayShort.map((value)=>(
          <td>{value}</td>
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
                {this.headers.map((header)=>(
                    <th>{header}</th>
                ))}
            </tr>
          </thead>
          <tbody class="table-body">
            {this.data.map((_, index)=>this.renderTableIndex(index))}
          </tbody>
        </table>
      </Host>
    );
  }
}
