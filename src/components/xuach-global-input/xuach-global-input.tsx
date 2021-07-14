import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'xuach-global-input',
  styleUrl: 'xuach-global-input.css',
  shadow: true,
})
export class XuachGlobalInput {
  @Prop() disabled: boolean = false;
  @Prop() text: string;
  @Prop() error_message: string;
  @Prop() label: string;
  @Prop() append_icon: string;
  @Prop() prepend_icon: string;

  //get style disabled
  getStyleDisabled(){
    return this.disabled?'disabled':'not-disabled'
  }

  render() {
    return (
      <Host>
        <div class={'input '+this.getStyleDisabled()}>
        <img src={this.prepend_icon} class="imagen"  />
        <input   disabled={this.disabled} type={'text'} class="form-control" placeholder={this.label} />
          <label class="control-label"> {this.label}</label>
          <img src={this.append_icon} class="imagen"  />
        </div>
      </Host>
    );
  }
}
