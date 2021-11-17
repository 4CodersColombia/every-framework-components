import { Component, h, Prop, EventEmitter, Event, State } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';
@Component({
  tag: 'ef-paginator',
  styleUrl: 'ef-paginator.css',
  shadow: true,
})
export class EfPaginator {
  @Prop({ mutable: true }) pageActive: number = 1;
  @Prop() pages: number = 3;
  @Prop() visiblePages: number = 3;
  //Event to emit any action from of parent
  @Event() event: EventEmitter<number>;
  eventSelectedPage(indexPage) {
    this.pageActive = indexPage;
    this.event.emit(this.pageActive);
  }

  @State() arrayVisiblesPages: number[];

  componentWillLoad() {
    //ubicacion de la posicion inicial del pageActive en el paginador visible
    this.chargeArrayVisiblesPages();
    if (this.pageActive > this.visiblePages) {
      this.arrayVisiblesPages = this.arrayVisiblesPages.map(index => index + this.pageActive - this.visiblePages);
    }
  }
  //actualizacion de paginas visibles
  componentWillUpdate() {
    if (this.pageActive == 1) {
      this.chargeArrayVisiblesPages();
    }
  }
  chargeArrayVisiblesPages() {
    this.arrayVisiblesPages = new Array(this.visiblePages).fill(undefined).map((_val, idx) => idx + 1);
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
    this.eventSelectedPage(this.pageActive + option);
  }
  getImageArrow(option: string) {
    //funcion para retornar el tipo de flecha desactivada o activada
    if ((this.arrayVisiblesPages[0] == 1 && option == 'left') || (this.arrayVisiblesPages[this.visiblePages - 1] == this.pages && option == 'right'))
      return EVERYFRAMEWORKICONS['ARROW_RIGHT_DISABLED'];
    return EVERYFRAMEWORKICONS['ARROW_RIGHT'];
  }
  getSelectedPage(indexPage) {
    //funcion para obtencion de la clase de la animacion de la pagina seleccionada
    return this.pageActive == indexPage ? 'ef-page-selected ef-page' : 'ef-page';
  }
  renderPages() {
    return this.arrayVisiblesPages.map(index => {
      return (
        <div onClick={this.eventSelectedPage.bind(this, index)} class={this.getSelectedPage(index)}>
          <span> {index}</span>
        </div>
      );
    });
  }
  render() {
    return (
      <div class="ef-paginations">
        <img onClick={this.setPageActive.bind(this, -1)} class="ef-page-arrow ef-page-arrow-left" src={this.getImageArrow('left')} alt="arrow-left" />
        {this.renderPages()}
        <img onClick={this.setPageActive.bind(this, 1)} class="ef-page-arrow " src={this.getImageArrow('right')} alt="arrow-right" />
      </div>
    );
  }
}
