import { Component, Host, h, Prop, getAssetPath, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ef-chip',
  styleUrl: 'ef-chip.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class EfChip {
  @Prop() text: string;
  @Prop() cancel: boolean;
  @Prop() value: string | number;
  //Event to emit any action from of parent
  @Event() event: EventEmitter<string | number>;
  eventButton(value: string | number) {
    if (value == undefined) return this.event.emit();
    this.event.emit(value);
  }

  renderCancel() {
    if (this.cancel)
      return <img onClick={this.eventButton.bind(this, this.value)} class="ef-chip__button-cancel" src={getAssetPath(`./assets/ef-chip__cancel.png`)} alt="cancel" />;
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
