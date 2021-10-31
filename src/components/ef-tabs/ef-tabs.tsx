import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
@Component({
  tag: 'ef-tabs',
  styleUrl: 'ef-tabs.css',
  shadow: true,
})
export class EfTabs {
  @Prop() titles: { text: string; value: string; icon?: string }[];

  @State() tabActiveIndex: string | number = 0;

  //Event to emit any action from of parent
  @Event() event: EventEmitter<string>;
  eventTab(id: string) {
    this.event.emit(id);
  }
  getContentActiveTab(indexTab) {
    return this.tabActiveIndex == indexTab ? 'ef-tab-content-active' : 'ef-tab-content-hidden';
  }
  getButtonActiveTab(indexTab) {
    return this.tabActiveIndex == indexTab ? 'ef-tab-button-active' : 'ef-tab-button-hidden';
  }
  setContentActiveTab(newIndexTab,newValue) {
    this.tabActiveIndex = newIndexTab;
    this.eventTab(newValue);
  }
  getAnimationLineTab(indexTab) {
    return indexTab * 90 + 'px';
  }

  renderIconTab(itemTab) {
    if (itemTab.icon) return <img class="ef-tab-button-icon" src={itemTab.icon} alt={itemTab.text} />;
  }
  renderButtonsTabs() {
    return this.titles.map((item, index) => {
      return (
        <li>
          <button class={this.getButtonActiveTab(index)} onClick={this.setContentActiveTab.bind(this, index,item.value)}>
            {this.renderIconTab(item)}
            {item.text}
          </button>
        </li>
      );
    });
  }
  renderTabs() {
    return this.titles.map((item, index) => {
      return (
        <div class={this.getContentActiveTab(index)}>
          <slot name={item.value}>{item.text}</slot>
        </div>
      );
    });
  }

  render() {
    return (
      <div class="ef-tabs-container">
        <ul class="ef-tabs">
          {this.renderButtonsTabs()}
          <div class="ef-tabs-animation ef-tabs-animation-start" style={{ left: this.getAnimationLineTab(this.tabActiveIndex) }}></div>
        </ul>
        <div class="ef-tabs-content">{this.renderTabs()}</div>
      </div>
    );
  }
}
