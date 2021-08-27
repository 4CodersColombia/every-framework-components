import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ef-modal-right',
  styleUrl: 'ef-modal-right.css',
  shadow: true,
})
export class EfModalRight {
  @Prop() showModal: boolean = false;
  @Prop() width: string;
  render() {
    return (
      <Host>
        <div class={this.showModal ? 'modal-right-open modal-right' : 'modal-right-close modal-right'} style={{ width: this.width }}>
          <slot />
        </div>
      </Host>
    );
  }
}
