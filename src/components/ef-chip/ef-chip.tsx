import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameworkIcons/everyFrameworkIcons';
@Component({
  tag: 'ef-chip',
  styleUrl: 'ef-chip.css',
  shadow: true,
})
export class EfChip {
  @Prop() text: string;
  @Prop() cancel: boolean;
  @Prop() value: string | number;
  @Prop() urlIcon: string = EVERYFRAMEWORKICONS['CHIP_CANCEL'];
  //Event to emit any action from of parent
  @Event() event: EventEmitter<string | number>;
  eventButton(value: string | number) {
    if (value == undefined) return this.event.emit();
    this.event.emit(value);
  }

  renderCancel() {
    return <img onClick={this.eventButton.bind(this, this.value)} class="ef-chip__button-cancel" src={this.urlIcon} alt="cancel" />;
  }

  render() {
    return (
      <Host>
        <div class="ef-chip__container">
          {this.text}
          {this.renderCancel()}
        </div>
      </Host>
    );
  }
}
