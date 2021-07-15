import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'xuach-global-input',
  styleUrl: 'xuach-global-input.css',
  shadow: true,
})
export class XuachGlobalInput {
  @Prop() disabled: boolean = false;
  @Prop() text: string;
  @Prop({ attribute: 'error-message' }) errorMessage: string;
  @Prop() label: string;
  @Prop({ attribute: 'append-icon' }) appendIcon: string;
  @Prop({ attribute: 'prepend-icon' }) prependIcon: string;

  //get style disabled
  getStyleDisabled() {
    return this.disabled ? 'disabled' : '';
  }

  //get style error message
  getStyleErrorMessage(){
    return this.errorMessage && !this.disabled ?'error':''
  }

  render() {
    return (
      <Host>
        <div class={this.getStyleErrorMessage()+' input '+this.getStyleDisabled()}>
          <img src={this.prependIcon} class="imagen" />
          <input disabled={this.disabled} type={'text'} class="form-control" placeholder={this.label} />
          <label class="control-label"> {this.label}</label>
          <img src={this.appendIcon} class="imagen" />
        </div>
        <span class="error-message">{this.errorMessage}</span>
      </Host>
    );
  }
}
