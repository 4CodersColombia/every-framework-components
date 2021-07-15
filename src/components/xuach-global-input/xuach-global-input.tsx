import { Component, Host, h, Prop,Event,EventEmitter } from '@stencil/core';

@Component({
  tag: 'xuach-global-input',
  styleUrl: 'xuach-global-input.css',
  shadow: true,
})
export class XuachGlobalInput {
  @Prop() disabled: boolean = false;
  @Prop({reflect: true, mutable: true}) value: string;
  @Prop({ attribute: 'error-message' }) errorMessage: string;
  @Prop({reflect: true, mutable: true}) label: string;
  @Prop({ attribute: 'append-icon' }) appendIcon: string;
  @Prop({ attribute: 'prepend-icon' }) prependIcon: string;

  
  //Event to emit any action from of parent
  @Event() valueChange: EventEmitter<string>;
 
  onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }

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
          <input value={this.value} disabled={this.disabled}
           type={'text'} class="form-control" 
           placeholder={this.label}
           onInput={this.onInputChangeValue.bind(this)}
            />
          <label class="control-label"> {this.label}</label>
          <img src={this.appendIcon} class="imagen" />
        </div>
        <span class="error-message">{this.errorMessage}</span>
      </Host>
    );
  }
}
