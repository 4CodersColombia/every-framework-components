import { Component, Host, h, Prop, EventEmitter, Event, State, Element } from '@stencil/core';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';
@Component({
  tag: 'ef-dropdown',
  styleUrl: 'ef-dropdown.css',
  shadow: true,
})
export class XuachGlobalDropdown {
  @Prop() disabled: boolean = false;
  @Prop() value: string;
  @Prop() items: { id: string | number; text: string; iconUrl?: string }[] = [];
  @Prop({ attribute: 'error-message' }) errorMessage: string;
  @Prop() label: string;
  @Prop() urlIconLeft: string;
  @Prop() urlIconRight: string = EVERYFRAMEWORKICONS['ARROW_DOWN'];
  @Element() private element: HTMLElement;

  //state for dinamic width by element HTMLEMENT
  @State() widthDropDownMenu: string;
  //state visibility menu
  @State() visibilityMenuDropdown: boolean = false;

  //Event to emit any action from of parent
  @Event({ eventName: 'change-value' }) changeValue: EventEmitter<object>;

  //component load
  componentWillUpdate() {
    this.widthDropDownMenu = this.element.clientWidth + 'px';
  }
  //click outside
  clickOutSide() {
    this.visibilityMenuDropdown = false;
  }
  //emit event of Dropdown text
  onDropdownChangeValue(newValue: object) {
    this.visibilityMenuDropdown = false;
    this.changeValue.emit(newValue);
  }

  //get style disabled
  getStyleDisabled() {
    return this.disabled ? 'disabled' : '';
  }
  //get style Label animation
  getStyleLabel() {
    if (!this.items) return 'control-label';
    return this.items
      .map(item => {
        return item.text;
      })
      .includes(this.value)
      ? 'control-label-animation'
      : 'control-label';
  }

  //get style error message
  getStyleErrorMessage() {
    return this.errorMessage && !this.disabled ? 'error' : '';
  }
  //get class of menu dropdown
  getClassDropdownMenu() {
    return this.visibilityMenuDropdown ? 'dropdown-menu' : 'dropdown-menu-hide';
  }
  //get icon item selected
  getItemSelected(valueSelected: string) {
    return this.items.find(item => item.text == valueSelected);
  }

  //get value of select dropdown
  getValueOfSelectDropdown() {
    if (!this.items) return <span class="dropdown-text">{this.label}</span>;
    return this.items
      .map(item => {
        return item.text;
      })
      .includes(this.value) ? (
      <span class="dropdown-menu__item-selected">
        <img src={this.getItemSelected(this.value).iconUrl} alt={`${this.getItemSelected(this.value).id}`} class="dropdown-menu__item-icon" />
        <span class="dropdown-text">{this.value}</span>
      </span>
    ) : (
      <span class="dropdown-text">{this.label}</span>
    );
  }
  //get opstions value
  getOptionsValue() {
    if (!this.items) {
      return (
        <li
          role="option"
          tabIndex={0}
          onClick={() => {
            this.visibilityMenuDropdown = false;
          }}
        >
          No hay opciones
        </li>
      );
    }
    return this.items.map(item => {
      return (
        <li role="option" tabindex={item.id} onClick={this.onDropdownChangeValue.bind(this, item)}>
          {item.iconUrl ? <img src={item.iconUrl} alt={`${item.id}`} class="dropdown-menu__item-icon" /> : ''}
          {' ' + item.text}
        </li>
      );
    });
  }
  render() {
    return (
      <Host onblur={this.clickOutSide.bind(this)}>
        <div class="scroll-hide">
          <div class={this.getStyleErrorMessage() + ' dropdown ' + this.getStyleDisabled()}>
            <button
              disabled={this.disabled}
              class="form-control"
              onClick={() => {
                this.visibilityMenuDropdown = true;
              }}
            >
              <div class="dropdown-text">
                <img src={this.urlIconLeft} class="imagen" />
                {this.getValueOfSelectDropdown()}
              </div>
              <img src={this.urlIconRight} class="icon-image" />
            </button>
            <label class={this.getStyleLabel()}> {this.label}</label>
          </div>
          <span class="error-message">{this.errorMessage}</span>
          <ul class={this.getClassDropdownMenu()} role="listbox" style={{ width: this.widthDropDownMenu }}>
            {this.label ? <span>{this.label}</span> : ''}
            {this.getOptionsValue()}
          </ul>
        </div>
      </Host>
    );
  }
}
