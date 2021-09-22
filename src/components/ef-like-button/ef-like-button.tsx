import { Component, h, Prop, getAssetPath, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ef-like-button',
  styleUrl: 'ef-like-button.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class EfLikeButton {
  @Prop() checked: boolean = false;

  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventButton() {
    this.event.emit();
  }
  getBackgroundChecked(checked: boolean) {
    return checked ? 'like.png' : 'unLike.png';
  }
  render() {
    return (
      <div class="ef-like-button__container" onClick={this.eventButton.bind(this)}>
        <img src={getAssetPath(`./assets/${this.getBackgroundChecked(this.checked)}`)} alt="like.png" />
      </div>
    );
  }
}
