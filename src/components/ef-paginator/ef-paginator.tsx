import { Component, getAssetPath, h, Prop, EventEmitter, Event, State } from '@stencil/core';

@Component({
  tag: 'ef-paginator',
  styleUrl: 'ef-paginator.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class EfPaginator {
  @Prop({ mutable: true }) pageActive: number = 1;
  @Prop() pages: number = 17;
  @Prop() visiblePages: number = 3;
  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventSelectedPage(indexPage) {
    this.pageActive = indexPage;
    this.event.emit();
  }

  @State() arrayVisiblesPages: number[] = new Array(this.visiblePages).fill(undefined).map((_val, idx) => idx + 1);

  componentWillLoad() {
    //ubicacion de la posicion inicial del pageActive en el paginador visible
    if (this.pageActive > this.visiblePages) {
      this.arrayVisiblesPages = this.arrayVisiblesPages.map(index => index + this.pageActive - this.visiblePages);
    }
  }
  setVisiblepages(option: number) {
    //actualizador del paginador visible cuando se llegan a los extremos y aun existen paginas
    if ((this.pageActive == this.arrayVisiblesPages[this.visiblePages - 1] && option == 1) || (this.pageActive == this.arrayVisiblesPages[0] && option == -1)) {
      this.arrayVisiblesPages = this.arrayVisiblesPages.map(index => index + option);
    }
  }

  setPageActive(option: number) {
    //actualizador del pageActive  con reglas de bordes
    if ((this.pageActive <= 1 && option == -1) || (this.pageActive >= this.pages && option == 1)) return;
    this.setVisiblepages(option);
    this.pageActive = this.pageActive + option;
  }
  getImageArrow(option: string) {
    //funcion para retornar el tipo de flecha desactivada o activada
    if ((this.arrayVisiblesPages[0] == 1 && option == 'left') || (this.arrayVisiblesPages[this.visiblePages - 1] == this.pages && option == 'right'))
      return 'ef-arrow-disabled.png';
    return 'ef-arrow.png';
  }
  getSelectedPage(indexPage) {
    //funcion para obtencion de la clase de la animacion de la pagina seleccionada
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
        <img onClick={this.setPageActive.bind(this, -1)} class="ef-page-arrow ef-page-arrow-left" src={getAssetPath(`./assets/${this.getImageArrow('left')}`)} alt="arrow-left" />
        {this.renderPages()}
        <img onClick={this.setPageActive.bind(this, 1)} class="ef-page-arrow " src={getAssetPath(`./assets/${this.getImageArrow('right')}`)} alt="arrow-right" />
      </div>
    );
  }
}
