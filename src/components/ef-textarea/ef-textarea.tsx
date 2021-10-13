import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ef-textarea',
  styleUrl: 'ef-textarea.css',
  shadow: true,
})
export class EfTextArea {
  @Prop() disabled: boolean = false;
  @Prop() value: string;
  @Prop() message: string;
  @Prop() error: boolean = false;
  @Prop() label: string;
  @Prop({ attribute: 'append-icon' }) appendIcon: string;
  @Prop({ attribute: 'prepend-icon' }) prependIcon: string;
  @Prop() limitCounter: number;

  // state for transformYLabel to textarea label placeholder
  @State() transformYLabel: { [key: string]: string };

  //Event to emit any action from of parent
  @Event() changeValue: EventEmitter<string>;

  //prevent input caracteres
  preventInput(value: string) {
    return value.length > this.limitCounter ? value.slice(0, value.length - 1) : value;
  }
  //emit event of textarea text
  onTextareaChangeValue(event: Event) {
    const element = event.target as HTMLTextAreaElement;
    (event.target as HTMLTextAreaElement).value = this.preventInput(element.value);
    this.autoSizeTextArea(element);
    const value = element.value;
    this.changeValue.emit(value);
  }

  //get style disabled
  getStyleDisabled() {
    return this.disabled ? 'disabled' : '';
  }

  //get style error message
  getStyleErrorMessage() {
    return this.error && !this.disabled ? 'error' : '';
  }

  //get style message
  getStyleMessage() {
    return this.error && !this.disabled ? 'error-message' : 'message';
  }
  // auto size hight textarea
  autoSizeTextArea(element: HTMLTextAreaElement) {
    element.style.height = '45px';
    element.style.height = element.scrollHeight - 11 + 'px';
    const hight = element.scrollHeight;
    const transformY = hight < 60 ? hight : hight - 10;
    this.transformYLabel = {
      transform: `translateY(${15 - transformY}px)`,
      transition: '0s',
    };
  }
  render() {
    return (
      <Host>
        <div class={this.getStyleErrorMessage() + ' textarea ' + this.getStyleDisabled()}>
          <img src={this.prependIcon} class="imagen" />
          <textarea value={this.value} disabled={this.disabled} class="form-control" placeholder={this.label} onInput={this.onTextareaChangeValue.bind(this)} />
          <label id="text-label" class="control-label" style={this.transformYLabel}>
            {this.label}
          </label>
          <img src={this.appendIcon} class="imagen" />
        </div>
        <span class={this.getStyleMessage()}>{this.message}</span>
      </Host>
    );
  }
}
