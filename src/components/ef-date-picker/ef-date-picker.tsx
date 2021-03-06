import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';
import 'app-datepicker';
@Component({
  tag: 'ef-date-picker',
  styleUrl: 'ef-date-picker.css',
  shadow: true,
})
export class EfDatePicker {
  @Prop({ mutable: true }) showModal: boolean = false;
  @Prop({ mutable: true }) value: string;
  @Prop() label: string;
  @Prop() minDate: string = '1921-01-01';
  @Prop() maxDate: string;
  @Prop() textCancel: string = 'CANCELAR';
  @Prop() textConfirm: string = 'OK';
  @Prop({ attribute: 'append-icon' }) appendIcon: string;
  @Prop({ attribute: 'prepend-icon' }) prependIcon: string;
  @Prop() disabled: boolean = false;

  @State() selectedDate: string;

  //Event to emit any action from of parent
  @Event({eventName:'change-value'}) changeValue: EventEmitter<string>;

  eventDatePicker(newDate: string) {
    this.changeValue.emit(newDate);
  }
  setModalDatePicker() {
    if (this.value) this.selectedDate = this.value;
    this.showModal = !this.showModal;
  }
  setDateValue(newDate: string) {
    this.value = newDate;
    this.setModalDatePicker();
    this.eventDatePicker(this.value);
  }

  render() {
    return (
      <div>
        <ef-input disabled={this.disabled} type="datepicker" onClick={this.setModalDatePicker.bind(this)} value={this.value} label={this.label} prepend-Icon={this.prependIcon}></ef-input>
        <ef-modal showModal={this.showModal && !this.disabled}>
          <app-datepicker
            class="datepicker-header" 
            alwaysResetValue={true}
            max={this.maxDate}
            min={this.minDate}
            value={this.selectedDate}
            on-datepicker-first-updated={value => {
              this.selectedDate = value.detail.value;
            }}
            on-datepicker-value-updated={value => {
              this.selectedDate = value.detail.value;
            }}
          ></app-datepicker>
          <div class="ef-date-picker__options">
            <div class="ef-date-picker__options-button" onClick={this.setModalDatePicker.bind(this)}>
              {this.textCancel}
            </div>
            <div class="ef-date-picker__options-button" onClick={this.setDateValue.bind(this, this.selectedDate)}>
              {this.textConfirm}
            </div>
          </div>
        </ef-modal>
      </div>
    );
  }
}
