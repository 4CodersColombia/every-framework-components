import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ef-input',
  styleUrl: 'ef-input.css',
  shadow: true,
})
export class PrInput {
  @Prop() disabled: boolean = false;
  @Prop() value: string;
  @Prop({ attribute: 'error-message' }) errorMessage: string;
  @Prop() label: string;
  @Prop({ attribute: 'append-icon' }) appendIcon: string;
  @Prop({ attribute: 'prepend-icon' }) prependIcon: string;
  @Prop() type: 'text' | 'password'|'number' = 'text';

  //data of config input for text or password
  @State() configInputType: string;
  //Event to emit any action from of parent
  @Event() event: EventEmitter<string>;

  //event when component will load
  componentWillLoad() {
    this.configInputType = this.type;
  }

  //emit event of input text
  onInputChangeValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if(this.type=='number'&& isNaN(parseInt(value))) event.preventDefault();
    this.event.emit(value);
  }

  //set Visible Password
  setVisiblePasswod() {
    if (this.type === 'password') {
      this.configInputType = this.configInputType == 'text' ? 'password' : 'text';
    }
  }
  //get style disabled
  getStyleDisabled() {
    return this.disabled ? 'disabled' : '';
  }

  //get style error message
  getStyleErrorMessage() {
    return this.errorMessage && !this.disabled ? 'error' : '';
  }

  render() {
    return (
      <Host>
        <div class={this.getStyleErrorMessage() + ' input ' + this.getStyleDisabled()}>
          <img src={this.prependIcon} class="imagen" />
          <input
            value={this.value}
            disabled={this.disabled}
            type={this.configInputType}
            class="form-control"
            placeholder={this.label}
            onInput={this.onInputChangeValue.bind(this)}
          />
          <label class="control-label"> {this.label}</label>
          <img onClick={this.setVisiblePasswod.bind(this)} src={this.appendIcon} class="imagen" />
        </div>
        <span class="error-message">{this.errorMessage}</span>
      </Host>
    );
  }
}
