import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ef-like-button',
  styleUrl: 'ef-like-button.css',
  shadow: true,
})
export class EfLikeButton {
  @Prop() checked: boolean = false;
  @Prop() urlIConLike:string;
  @Prop() urlIconUnlike:string;
  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventButton() {
    this.event.emit();
  }
  getBackgroundChecked(checked: boolean) {
    if(checked){
      return  this.urlIConLike? <img src={this.urlIConLike} alt="like.png" />:<i class="fas fa-heart" style={{color:'red'}}></i>
    }
    return  this.urlIconUnlike? <img src={this.urlIconUnlike} alt="like.png" />:<i class="far fa-heart"></i>
  }

  render() {
    return (
      <div class="ef-like-button__container" onClick={this.eventButton.bind(this)}>
        {this.getBackgroundChecked(this.checked)}
      </div>
    );
  }
}
