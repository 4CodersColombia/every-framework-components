import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';
@Component({
  tag: 'ef-tabs',
  styleUrl: 'ef-tabs.css',
  shadow: true,
})
export class EfTabs {
  @Prop() titles: { text: string; value: string; icon?: string }[] ;
  @Prop() arrows: boolean = false;
  @Prop() tabActiveIndex: number = 1;
  @Prop() visiblesTabs: number = 1;
  @State() arrayVisiblesTabs: number[] = [];

  //Event to emit any action from of parent
  @Event() event: EventEmitter<string>;
  eventTab(id: string) {
    this.event.emit(id);
  }
  componentWillLoad() {
    //ubicacion de la posicion inicial del tabActiveIndex en el paginador visible
    this.chargeArrayVisiblesTabs();
    if (this.tabActiveIndex > this.visiblesTabs) {
      this.arrayVisiblesTabs = this.arrayVisiblesTabs.map(index => index + this.tabActiveIndex - this.visiblesTabs);
    }
  }
  //actualizacion de paginas visibles
  componentWillUpdate() {
    if (this.tabActiveIndex == 1) {
      this.chargeArrayVisiblesTabs();
    }
  }
  chargeArrayVisiblesTabs() {
    this.arrayVisiblesTabs = new Array(this.visiblesTabs).fill(undefined).map((_val, idx) => idx + 1);
  }
  setVisiblesTabs(newTabIndex: number) {
    //actualizador del paginador visible cuando se llegan a los extremos y aun existen paginas
    if(this.arrayVisiblesTabs.includes(newTabIndex))return;
    this.arrayVisiblesTabs = this.arrayVisiblesTabs.map((_item, index) => index + newTabIndex);
  }

  setTabActiveIndex(newTabIndex: number, newValue: string) {
    //actualizador del tabActiveIndex  con reglas de bordes

    if (newTabIndex < 1 || newTabIndex > this.titles.length) return;
    this.tabActiveIndex = newTabIndex;
    this.setVisiblesTabs(newTabIndex);
    this.eventTab(newValue);
  }
  getContentActiveTab(indexTab) {
    return this.tabActiveIndex == indexTab ? 'ef-tab-content-active' : 'ef-tab-content-hidden';
  }
  getButtonActiveTab(indexTab) {
    return this.tabActiveIndex == indexTab ? 'ef-tab-button-active' : 'ef-tab-button-hidden';
  }
  getAnimationLineTab(indexTab) {
    const left = this.arrayVisiblesTabs.indexOf(indexTab) 
    return left * 90 + 'px';
  }

  renderIconTab(itemTab) {
    if (itemTab.icon) return <img class="ef-tab-button-icon" src={itemTab.icon} alt={itemTab.text} />;
  }
  renderButtonsTabs() {
    return this.arrayVisiblesTabs.map(index => {
      return (
        <li>
          <button class={this.getButtonActiveTab(index)} onClick={this.setTabActiveIndex.bind(this, index, this.titles[index-1].value)}>
            {this.renderIconTab(this.titles[index - 1])}
            {this.titles[index - 1].text}
          </button>
        </li>
      );
    });
  }
  renderTabs() {
    return this.arrayVisiblesTabs.map(index => {
      return (
        <div class={this.getContentActiveTab(index)}>
          <slot name={this.titles[index - 1].value}>{this.titles[index - 1].text}</slot>
        </div>
      );
    });
  }
  getImageArrow(option: string) {
    //funcion para retornar el tipo de flecha desactivada o activada
    if ((this.tabActiveIndex == 1 && option == 'left') || (this.tabActiveIndex == this.titles.length && option == 'right')) return EVERYFRAMEWORKICONS['ARROW_LEFT_DISABLED'];
    return EVERYFRAMEWORKICONS['ARROW_LEFT'];
  }
  renderImageArrow(option: string) {
    if (!this.arrows) return;
    const plusValue = option == 'left' ? this.tabActiveIndex - 1  : this.tabActiveIndex + 1;
    const newValue = plusValue <= 0 || plusValue > this.titles.length ? this.titles[0].value : this.titles[plusValue-1].value;
    return (
      <img
        onClick={this.setTabActiveIndex.bind(this, plusValue, newValue)}
        class={`ef-tab__arrow ef-tab__arrow-${option}`}
        src={this.getImageArrow(option)}
        alt={`arrow-${option}`}
      />
    );
  }

  render() {
    return (
      <div class="ef-tabs-container">
        <div class="ef-tabs-container__tabs">
          {this.renderImageArrow('left')}
          <ul class="ef-tabs">
            {this.renderButtonsTabs()}
            <div class="ef-tabs-animation ef-tabs-animation-start" style={{ left: this.getAnimationLineTab(this.tabActiveIndex) }}></div>
          </ul>
          {this.renderImageArrow('right')}
        </div>
        <div class="ef-tabs-content">{this.renderTabs()}</div>
      </div>
    );
  }
}
