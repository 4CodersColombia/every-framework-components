import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
 import EVERYFRAMEWORKICONS from '../../everyFrameWorkIcons/everyFrameworkIcons';
@Component({
  tag: 'ef-checkbox',
  styleUrl: 'ef-checkbox.css',
  shadow: true,
})
export class XuachCheckbox {
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() size: number = 24;
  @Prop() urlIcon:string =EVERYFRAMEWORKICONS['CHECK'];
  @Prop() urlIconDisabled:string=EVERYFRAMEWORKICONS['CHECK_DISABLED'];
  @State() styleCheckbox: { backgroundImage: string; height: string; width: string };

  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventCheckBox(ev: Event) {
    ev.preventDefault();
    this.event.emit();
  }

  //function for load state info
  componentWillLoad() {
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
    if (this.disabled) return this.urlIconDisabled;
    return this.checked ? this.urlIcon : '';
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
