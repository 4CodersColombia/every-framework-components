import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { CONST_SIZES_BUTTON, CONST_COLORS_BUTTON } from './constants';

@Component({
  tag: 'ef-button',
  styleUrl: 'ef-button.css',
  shadow: true,
})
export class PrButton {
  @Prop() color: 'PRIMARY' | 'SECONDARY' = 'PRIMARY';
  @Prop() disabled: boolean = false;
  @Prop() size: 'LARGE' | 'MEDIUM' | 'SMALL' = 'LARGE';
  @Prop() text: string;
  @Prop() urlIcon: string;
  @State() styleEfButton: any;
  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventButton() {
    this.event.emit();
  }
  componentWillLoad(){
    this.chargeDataStyle()
  }
  componentWillUpdate() {
    this.chargeDataStyle()
  }
  chargeDataStyle() {
    this.styleEfButton = {
      ...this.getSizeOfBotton(),
      backgroundColor: this.getBackgroundColor(),
      borderColor: this.getColorOfButton(),
    };
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

  renderImage() {
    if (this.urlIcon) return <img class="imagen" src={this.urlIcon} />;
  }
  render() {
    return (
      <Host style={this.getSizeOfBotton()}>
        <button class="ef-button" disabled={this.disabled} style={this.styleEfButton} type="button" onClick={this.eventButton.bind(this)}>
          {this.text}
          {this.renderImage()}
        </button>
      </Host>
    );
  }
}
