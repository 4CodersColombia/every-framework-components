import { Component, Host, h, Prop, Element } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';

@Component({
  tag: 'ef-carousel',
  styleUrl: 'ef-carousel.css',
  shadow: true,
})
export class EfCarousel {
  @Prop() photosUrl: string[] = ['https://i.blogs.es/594843/chrome/450_1000.jpg', 'https://i.blogs.es/594843/chrome/450_1000.jpg', 'https://i.blogs.es/594843/chrome/450_1000.jpg'];
  @Prop() itemActive: number = 1;

  @Element() private element: HTMLElement;

  //component load
  componentWillUpdate() {
    console.log(this.element.clientHeight)
    console.log('hola')
  }
  renderItems() {
    return this.photosUrl.map((item, index) => {
      return <img id={`slide${index + 1}`} src={item} alt={item + index} class="ef-carousel__item" />;
    });
  }
  setItemActive(option: number) {
    //actualizador del itemActive  con reglas de bordes
    if ((this.itemActive <= 1 && option == -1) || (this.itemActive >= this.photosUrl.length && option == 1)) return;
    this.itemActive += option;
    location.href = '#slide1';
  }
  getImageArrow(option: string) {
    //funcion para retornar el tipo de flecha desactivada o activada
    if ((this.itemActive == 1 && option == 'left') || (this.itemActive == this.photosUrl.length && option == 'right')) return EVERYFRAMEWORKICONS['ARROW_LEFT_DISABLED'];
    return EVERYFRAMEWORKICONS['ARROW_LEFT'];
  }
  render() {
    return (
      <Host>
        <div class="ef-carousel__container">
          <img onClick={this.setItemActive.bind(this, -1)} class="ef-carousel__arrow ef-carousel__arrow-left" src={this.getImageArrow('left')} alt="arrow-left" />
          {this.renderItems()}
          <img onClick={this.setItemActive.bind(this, 1)} class="ef-carousel__arrow" src={this.getImageArrow('right')} alt="arrow-right" />
        </div>
      </Host>
    );
  }
}
