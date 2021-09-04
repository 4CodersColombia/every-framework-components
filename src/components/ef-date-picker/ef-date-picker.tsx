import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import 'app-datepicker';
@Component({
  tag: 'ef-date-picker',
  styleUrl: 'ef-date-picker.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class EfDatePicker {
  @Prop() showModal: boolean = false;
  @Prop() date: string;
  @Prop() label: string = 'Fecha de nacimiento';
  @Prop({ attribute: 'append-icon' }) appendIcon: string;
  @Prop({ attribute: 'prepend-icon' }) prependIcon: string;

  //Event to emit any action from of parent
  @Event() event: EventEmitter;

  eventButton() {
    this.event.emit();
  }
  setModalDatePicker() {
    this.showModal = !this.showModal;
  }
  setDatePicker(newValue) {
    console.log(newValue);
  }

  render() {
    return (
      <div>
        <ef-input onClick={this.setModalDatePicker.bind(this)} value={this.date} label={this.label} prepend-Icon={this.prependIcon}></ef-input>
        <ef-modal show-modal={this.showModal}>
          <app-datepicker class="datepicker-header" value="2021-09-05"></app-datepicker>
        </ef-modal>
      </div>
    );
  }
}
