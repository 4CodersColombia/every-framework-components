import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { CONST_SIZES_XUACH_GLOBAL_BOTTON, CONST_COLORS_XUACH_GLOBAL_BOTTON } from '../../const/constXuachGlobalButton';

@Component({
  tag: 'xuach-global-button',
  styleUrl: 'xuach-global-button.css',
  shadow: true,
})
export class XuachGlobalButton {
  @Prop() color: 'PRIMARY' | 'SECONDARY' = 'PRIMARY';
  @Prop() disabled: boolean = false;
  @Prop() size: 'LARGE' | 'MEDIUM' | 'SMALL' = 'LARGE';
  @Prop() text: string;
  @Prop() icon: string;

  //Event to emit any action from of parent
  @Event() click: EventEmitter;
  eventButton() {
    this.click.emit();
  }
  //get size of button
  getSizeOfBotton() {
    return CONST_SIZES_XUACH_GLOBAL_BOTTON[this.size];
  }
  //get color of button
  getColorOfButton() {
    return this.disabled ? CONST_COLORS_XUACH_GLOBAL_BOTTON[this.color]['DISABLED'] : CONST_COLORS_XUACH_GLOBAL_BOTTON[this.color]['ENABLED'];
  }
  //get BackgroundColor
  getBackgroundColor() {
    return this.disabled ? CONST_COLORS_XUACH_GLOBAL_BOTTON['TRANSPARENT'] : this.getColorOfButton();
  }

  //get object css for button
  styleXuachGlobalButton = {
    ...this.getSizeOfBotton(),
    backgroundColor: this.getBackgroundColor(),
    borderColor: this.getColorOfButton(),
  };

  render() {
    return (
      <Host>
        <label class="button">
          <button disabled={this.disabled} style={this.styleXuachGlobalButton} type="button" onClick={this.eventButton.bind(this)}>
            {this.text}
            <img class="imagen" src={this.icon} />
          </button>
        </label>
      </Host>
    );
  }
}
