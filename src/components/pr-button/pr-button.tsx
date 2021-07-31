import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { CONST_SIZES_BUTTON, CONST_COLORS_BUTTON } from './constants';

@Component({
  tag: 'pr-button',
  styleUrl: 'pr-button.css',
  shadow: true,
})
export class PrButton {
  @Prop() color: 'PRIMARY' | 'SECONDARY' = 'PRIMARY';
  @Prop() disabled: boolean = false;
  @Prop() size: 'LARGE' | 'MEDIUM' | 'SMALL' = 'LARGE';
  @Prop() text: string;
  @Prop() icon: string;

  //Event to emit any action from of parent
  @Event() clickButton: EventEmitter;
  eventButton() {
    this.clickButton.emit();
  }
  //get size of button
  getSizeOfBotton() {
    return CONST_SIZES_BUTTON[this.size];
  }
  //get color of button
  getColorOfButton() {
    return this.disabled ? CONST_COLORS_BUTTON[this.color]['DISABLED'] : CONST_COLORS_BUTTON[this.color]['ENABLED'];
  }
  //get BackgroundColor
  getBackgroundColor() {
    return this.disabled ? CONST_COLORS_BUTTON['TRANSPARENT'] : this.getColorOfButton();
  }

  //get object css for button
  stylePrButton = {
    ...this.getSizeOfBotton(),
    backgroundColor: this.getBackgroundColor(),
    borderColor: this.getColorOfButton(),
  };

  render() {
    return (
      <Host>
        <label class="button">
          <button disabled={this.disabled} style={this.stylePrButton} type="button" onClick={this.eventButton.bind(this)}>
            {this.text}
            <img class="imagen" src={this.icon} />
          </button>
        </label>
      </Host>
    );
  }
}
