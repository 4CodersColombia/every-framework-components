import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
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

  @State() styleCheckbox: { backgroundImage: string; height: string; width: string };

  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventCheckBox(ev: Event) {
    ev.preventDefault();
    this.event.emit();
  }

  //function for load state info
  componentWillLoad() {
    console.log(CONST_IMAGES_CHECKBOX['DISABLED']);
    this.styleCheckbox = {
      backgroundImage: `url(${this.getBackgroundImageCheckBox()})`,
      height: `${this.size}px`,
      width: `${this.size}px`,
    };
  }
  componentWillUpdate() {
    this.styleCheckbox = {
      ...this.styleCheckbox,
      backgroundImage: `url(${this.getBackgroundImageCheckBox()})`,
    };
  }

  //get background images for checkbox states
  getBackgroundImageCheckBox() {
    if (this.disabled) return CONST_IMAGES_CHECKBOX['DISABLED'];
    return this.checked ? CONST_IMAGES_CHECKBOX['CHECKED'] : '';
  }

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