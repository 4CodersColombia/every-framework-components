import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'xuach-checkbox',
  styleUrl: 'xuach-checkbox.css',
  shadow: true,
})
export class XuachCheckbox {
  @Prop() checked: boolean



  render() {
    return (
      <Host >
        <input class="disabled" disabled type="checkbox" checked={this.checked} />
      </Host>
    )
  }
}
