import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ef-buttons-icon',
  styleUrl: 'ef-buttons-icon.css',
  shadow: true,
})
export class EfButtonsIcon {
  @Prop() buttons: { urlIcon: string; id: string }[];
  @Prop() align: 'HORIZONTAL' | 'VERTICAL' = 'HORIZONTAL';

  //Event to emit any action from of parent
  @Event() event: EventEmitter<string>;
  eventButton(id: string) {
    this.event.emit(id);
  }

  getAlign() {
    return this.align == 'HORIZONTAL' ? 'ef-buttons-icon_container-horizontal' : 'ef-buttons-icon_container-vertical';
  }

  renderButtons() {
    return this.buttons.map(item => {
      return <img class="ef-buttons-icon_button" onClick={this.eventButton.bind(this, item.id)} src={item.urlIcon} alt={item.id} />;
    });
  }
  render() {
    return <div class={this.getAlign()}>{this.renderButtons()}</div>;
  }
}
