import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ef-modal',
  styleUrl: 'ef-modal.css',
  shadow: true,
})
export class EfModal {
  @Prop() showModal: boolean = false;
  @Prop() width: string;
  render() {
    return (
      <Host>
        <div class={this.showModal ? 'wrapper visible' : 'wrapper'}>
          <div class="modal" style={{ width: this.width }}>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
