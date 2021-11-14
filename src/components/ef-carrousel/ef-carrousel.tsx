import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ef-carrousel',
  styleUrl: 'ef-carrousel.css',
  shadow: true,
})
export class EfCarrousel {
  @Prop() items: { id: number | string; title: string }[] = [];

  renderItems(items: { id: number | string; title: string }[]) {
    return items.map(item => (
      <div>
        <slot name={`${item.id}${item.title}`}> {item.title} </slot>
      </div>
    ));
  }
  render() {
    return (
      <Host>
        <div class="ef-carrousel__container">
          <div class="ef-carrousel__slider">
            <div id="slide-1">1</div>
            <div id="slide-2">2</div>
            <div id="slide-3">3</div>
            <div id="slide-4">4</div>
            <div id="slide-5">5</div>
            {this.renderItems(this.items)}
          </div>
        </div>
      </Host>
    );
  }
}
