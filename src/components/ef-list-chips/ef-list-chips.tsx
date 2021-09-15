import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ef-list-chips',
  styleUrl: 'ef-list-chips.css',
  shadow: true,
})
export class EfListChips {
  @Prop() chipGroup: { value?: string | number; text: string; cancel?: boolean }[]=[];
  ];
  @Prop() visibleChips: number = this.chipGroup.length;

  componentWillLoad() {
    if (this.visibleChips > this.chipGroup.length || this.visibleChips <= 0) this.visibleChips = this.chipGroup.length;
  }
  renderListChips() {
    return this.chipGroup.map((item, index) => {
      if (index + 1 <= this.visibleChips) {
        return <ef-chip class="ef-list-chips__chip" text={item.text} value={item.value} cancel={item.cancel}></ef-chip>;
      }
    });
  }
  renderRestChips() {
    if (this.visibleChips < this.chipGroup.length) {
      return <ef-chip class="ef-list-chips__chip" text={'+' + (this.chipGroup.length - this.visibleChips)}></ef-chip>;
    }
  }
  render() {
    return (
      <Host>
        <div class="ef-list-chips__container">
          {this.renderListChips()} {this.renderRestChips()}
        </div>
      </Host>
    );
  }
}
