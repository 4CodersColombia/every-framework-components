import { Component, getAssetPath, h, Prop, EventEmitter, Event, State } from '@stencil/core';

@Component({
  tag: 'ef-paginator',
  styleUrl: 'ef-paginator.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class EfPaginator {
  @Prop({ mutable: true }) pageActive: number = 7;
  @Prop() pages: number = 11;
  @Prop() visiblePages: number = 3;
  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventSelectedPage(indexPage) {
    console.log(this.pageActive);
    this.pageActive = indexPage;
    this.event.emit();
  }

  @State() arrayVisiblesPages: number[] = new Array(this.visiblePages).fill(undefined).map((_val, idx) => idx + 1);

  componentWillLoad() {
    if (this.pageActive > this.visiblePages) {
      this.arrayVisiblesPages = this.arrayVisiblesPages.map(index => index + this.pageActive - this.visiblePages);
    }
  }
  setVisiblepages(option: number) {
    if ((this.pageActive == this.arrayVisiblesPages[this.visiblePages - 1] && option == 1) || (this.pageActive == this.arrayVisiblesPages[0] && option == -1)) {
      this.arrayVisiblesPages = this.arrayVisiblesPages.map(index => index + option);
    }
  }

  setPageActive(option: number) {
    if ((this.pageActive <= 1 && option == -1) || (this.pageActive >= this.pages && option == 1)) return;
    this.setVisiblepages(option);
    this.pageActive = this.pageActive + option;
  }
  getSelectedPage(indexPage) {
    return this.pageActive == indexPage ? 'ef-page-selected ef-page' : 'ef-page';
  }
  renderPages() {
    return this.arrayVisiblesPages.map(index => {
      return (
        <div onClick={this.eventSelectedPage.bind(this, index)} class={this.getSelectedPage(index)}>
          {index}
        </div>
      );
    });
  }
  render() {
    return (
      <div class="ef-paginations">
        <img onClick={this.setPageActive.bind(this, -1)} class="ef-page-arrow-left ef-page-arrow" src={getAssetPath(`./assets/arrow-right.png`)} alt="arrow-right" />
        {this.renderPages()}
        <img onClick={this.setPageActive.bind(this, 1)} class="ef-page-arrow" src={getAssetPath(`./assets/arrow-right.png`)} alt="arrow-right" />
      </div>
    );
  }
}
