import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../EVERYFRAMEWORKICONS/EVERYFRAMEWORKICONS';
@Component({
  tag: 'ef-like-button',
  styleUrl: 'ef-like-button.css',
  shadow: true,
})
export class EfLikeButton {
  @Prop() checked: boolean = false;
  @Prop() urlIConLike:string=EVERYFRAMEWORKICONS['ICON_HEART_SOLID'];
  @Prop() urlIconUnlike:string=EVERYFRAMEWORKICONS['ICON_HEART'];
  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventButton() {
    this.event.emit();
  }
  getBackgroundChecked(checked: boolean) {
    return checked? <img src={this.urlIConLike} alt="like.png" />:<img src={this.urlIconUnlike} alt="like.png" />
  }

  render() {
    return (
      <div class="ef-like-button__container" onClick={this.eventButton.bind(this)}>
        {this.getBackgroundChecked(this.checked)}
      </div>
    );
  }
}
