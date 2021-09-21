import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ef-switch',
  styleUrl: 'ef-switch.css',
  shadow: true,
})
export class EfSwitch {
  @Prop() checked: boolean = true;
  @Prop() disabled: boolean = false;

  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventSwitch(ev: Event) {
    ev.preventDefault();
    this.event.emit();
  }
  render() {
    return (
      <label class="switch">
        <input checked={this.checked} disabled={this.disabled} onClick={this.eventSwitch.bind(this)} type="checkbox" />
        <span class="slider round"></span>
      </label>
    );
  }
}
