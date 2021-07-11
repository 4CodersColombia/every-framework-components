import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { CONST_IMAGES_CHECKBOX } from '../../const/constCheckBox';

@Component({
  tag: 'xuach-checkbox',
  styleUrl: 'xuach-checkbox.css',
  shadow: true,
})
export class XuachCheckbox {
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() size: number = 16;

  @Event() clickCheckBox: EventEmitter;

  getBackgroundImageCheckBox() {
    const backgroundImageCheckBox = this.disabled ? CONST_IMAGES_CHECKBOX['DISABLED'] : CONST_IMAGES_CHECKBOX['CHECKED'];
    return backgroundImageCheckBox;
  }

  render() {
    return (
      <Host>
        <label class="checkbox">
          <input
            type="checkbox"
            style={{ backgroundImage: `url(${this.getBackgroundImageCheckBox()})` }}
            checked={this.checked}
            disabled={this.disabled}
            onClick={this.clickCheckBox.emit}
          />
        </label>
      </Host>
    );
  }
}
