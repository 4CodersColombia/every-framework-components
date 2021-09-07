import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ef-modal-confirmation',
  styleUrl: 'ef-modal-confirmation.css',
  shadow: true,
})
export class EfModalConfirmation {
  @Prop() showModal: boolean = false;
  @Prop() width: string;
  @Prop() textConfirmation: string = 'Aceptar';
  @Prop() textCancel: string = 'Cancelar';

  //Event to emit any action from of parent
  @Event() event: EventEmitter;
  eventButton(confirmation: boolean) {
    this.event.emit(confirmation);
  }
  render() {
    return (
      <ef-modal show-modal={this.showModal} width={this.width}>
        <div class="ef-modal-confirmation">
          <slot></slot>
          <div class="ef-modaL-confirmation__options">
            <ef-button
              onEvent={() => {
                this.eventButton(true);
              }}
              size="LARGE"
              color="PRIMARY"
              text={this.textConfirmation}
              class="ef-modaL-confirmation__options-button-left"
            ></ef-button>
            <ef-button
              onEvent={() => {
                this.eventButton(false);
              }}
              size="LARGE"
              color="SECONDARY"
              text={this.textCancel}
              class="ef-modaL-confirmation__options-button-right"
            ></ef-button>
          </div>
        </div>
      </ef-modal>
    );
  }
}
