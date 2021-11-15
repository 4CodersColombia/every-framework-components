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
  @Prop() colorSelectedItems: string = 'white';
  @Prop() colorContainer: string = 'rgba(0, 0, 0, 0.55);';
  @Prop() arrows: boolean = true;
  @Prop() selectedItems: boolean = true;

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
    if ((this.itemActive == 1 && option == 'left') || (this.itemActive == this.items.length && option == 'right')) return EVERYFRAMEWORKICONS['ARROW_RIGHT_DISABLED'];
    return EVERYFRAMEWORKICONS['ARROW_RIGHT_WHITE'];
  }
  getItemActive(index: number) {
    return index == this.itemActive ? 'ef-carrousel__selected-item-active' : '';
  }
  getPositionItem(itemActive: number) {
    return { transform: `translateX(calc(${(itemActive - 1) * -100}%)` };
  }
  renderArrow(option: string) {
    if (!this.arrows) return;
    const plusValue = option == 'left' ? -1 : 1;
    return (
      <img
        onClick={this.setPageActive.bind(this, plusValue)}
        class={`ef-carrousel__arrow ef-carrousel__arrow-${option}`}
        src={this.getImageArrow(option)}
        alt={`arrow-${option}`}
      />
    );
  }
  renderSelectedItems() {
    if (!this.selectedItems) return;
    return this.items.map((_item, index) => {
      return (
        <div
          class={`ef-carrousel__selected-item ${this.getItemActive(index + 1)}`}
          style={{ 'background-color': this.colorSelectedItems }}
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
          {this.renderArrow('left')}
          <div class="ef-carrousel__slider">{this.renderItems(this.items)}</div>
          <div class="ef-carrousel__selecteds-items-container"> {this.renderSelectedItems()}</div>
          {this.renderArrow('right')}
        </div>
      </Host>
    );
  }
}
