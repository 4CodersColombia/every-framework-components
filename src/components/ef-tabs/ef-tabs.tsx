import { Component, h, Prop, State } from '@stencil/core';
@Component({
  tag: 'ef-tabs',
  styleUrl: 'ef-tabs.css',
  shadow: true,
})
export class EfTabs {
  @Prop() titles: { text: string; value: string; icon?: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];

  @State() tabActiveIndex: string | number = 0;

  getContentActiveTab(indexTab) {
    return this.tabActiveIndex == indexTab ? 'ef-tab-content-active' : 'ef-tab-content-hidden';
  }
  getButtonActiveTab(indexTab) {
    return this.tabActiveIndex == indexTab ? 'ef-tab-button-active' : 'ef-tab-button-hidden';
  }
  setContentActiveTab(newIndexTab) {
    this.tabActiveIndex = newIndexTab;
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
          <button class={this.getButtonActiveTab(index)} onClick={this.setContentActiveTab.bind(this, index)}>
            {this.renderIconTab(item)}
            {item.text}
          </button>
        </li>
      );
    });
  }
  renderTabs() {
    return this.titles.map((item, index) => {
      if (item.slot) {
        return <div class={this.getContentActiveTab(index)}>{item.slot({ value: item.value })}</div>;
      } else {
        return (
          <div class={this.getContentActiveTab(index)}>
            <slot name={item.value}>{item.text}</slot>
          </div>
        );
      }
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
