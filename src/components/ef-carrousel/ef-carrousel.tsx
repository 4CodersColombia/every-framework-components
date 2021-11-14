import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';

@Component({
  tag: 'ef-carrousel',
  styleUrl: 'ef-carrousel.css',
  shadow: true,
})
export class EfCarrousel {
  @Prop() items: { id: number | string; title: string }[] = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
  ];
  @Prop() itemActive: number = 1;
  @Prop() colorSelectedItem: string = 'white';
  @Prop() colorContainer: string = 'rgba(128, 128, 128, 0.178)';

  //Event to emit any action from of parent
  @Event() event: EventEmitter<number>;
  eventSelectedPage(indexPage) {
    this.itemActive = indexPage;
    this.event.emit(this.itemActive);
  }

  setPageActive(option: number) {
    //actualizador del pageActive  con reglas de bordes
    if ((this.itemActive <= 1 && option == -1) || (this.itemActive >= this.items.length && option == 1)) return;
    this.eventSelectedPage(this.itemActive + option);
  }
  getImageArrow(option: string) {
    //funcion para retornar el tipo de flecha desactivada o activada
    if ((this.itemActive == 1 && option == 'left') || (this.itemActive == this.items.length && option == 'right')) return EVERYFRAMEWORKICONS['ARROW_LEFT_DISABLED'];
    return EVERYFRAMEWORKICONS['ARROW_LEFT'];
  }
  getItemActive(index: number) {
    return index == this.itemActive ? 'ef-carrousel__selected-item-active' : '';
  }
  getPositionItem(itemActive: number) {
    return { transform: `translateX(calc(${(itemActive - 1) * -100}%)` };
  }
  renderSelectedItems() {
    return this.items.map((item, index) => {
      return (
        <div
          class={`ef-carrousel__selected-item ${this.getItemActive(index + 1)}`}
          style={{ 'background-color': this.colorSelectedItem }}
          onClick={this.eventSelectedPage.bind(this, index + 1)}
        ></div>
      );
    });
  }
  renderItems(items: { id: number | string; title: string }[]) {
    return items.map(item => (
      <div style={this.getPositionItem(this.itemActive)}>
        <slot name={`${item.id}`}> {item.title} </slot>
      </div>
    ));
  }
  render() {
    return (
      <Host>
        <div class="ef-carrousel__container" style={{ 'background-color': this.colorContainer }}>
          <img onClick={this.setPageActive.bind(this, -1)} class="ef-carrousel__arrow ef-carrousel__arrow-left" src={this.getImageArrow('left')} alt="arrow-left" />
          <div class="ef-carrousel__slider">{this.renderItems(this.items)}</div>
          <div class="ef-carrousel__selecteds-items-container"> {this.renderSelectedItems()}</div>
          <img onClick={this.setPageActive.bind(this, 1)} class="ef-carrousel__arrow" src={this.getImageArrow('right')} alt="arrow-right" />
        </div>
      </Host>
    );
  }
}
