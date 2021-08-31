import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ef-template-admin',
  styleUrl: 'ef-template-admin.css',
  shadow: true,
})
export class EfTemplateAdmin {
  @Prop() showModal: boolean = false;
  render() {
    return (
      <div class="admin-container">
        <div class="content-left">
          <slot name="content-left"></slot>
        </div>
        <ef-modal-right class="content-right" show-modal={this.showModal}>
          <slot name="content-right"></slot>
        </ef-modal-right>
      </div>
    );
  }
}
