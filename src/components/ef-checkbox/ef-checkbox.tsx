import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { CONST_IMAGES_CHECKBOX } from './constCheckBox';

@Component({
  tag: 'ef-checkbox',
  styleUrl: 'ef-checkbox.css',
  shadow: true,
})
export class XuachCheckbox {
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() size: number = 24;

  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventCheckBox(ev: Event) {
    ev.preventDefault();
    this.event.emit();
  }

  //get background images for checkbox states
  getBackgroundImageCheckBox() {
    return this.disabled ? CONST_IMAGES_CHECKBOX['DISABLED'] : CONST_IMAGES_CHECKBOX['CHECKED'];
  }

  //get object css for checkbox "size and image"
  styleCheckbox = {
    backgroundImage: `url(${this.getBackgroundImageCheckBox()})`,
    height: `${this.size}px`,
    width: `${this.size}px`,
  };

  render() {
    return (
      <Host>
        <label class="checkbox">
          <input type="checkbox" checked={this.checked} disabled={this.disabled} onClick={this.eventCheckBox.bind(this)} style={this.styleCheckbox} />
        </label>
      </Host>
    );
  }
}
