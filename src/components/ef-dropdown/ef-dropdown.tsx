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
  @Prop() items: { id: string | number; text: string }[] = [
    { id: 0, text: 'option1' },
    { id: 1, text: 'option2' },
    { id: 2, text: 'option3' },
    { id: 3, text: 'option4' },
  ];
  @Prop({ attribute: 'error-message' }) errorMessage: string;
  @Prop() label: string;
  @Prop() urlIconLeft: string;
  @Prop() urlIconRight: string = EVERYFRAMEWORKICONS['ARROW_DOWN'];
  @Element() private element: HTMLElement;

  //state for dinamic width by element HTMLEMENT
  @State() widthDropDownMenu:string;
  //state visibility menu
  @State() visibilityMenuDropdown: boolean = false;

  //Event to emit any action from of parent
  @Event() changeValue: EventEmitter<object>;

  //component load
  componentWillUpdate(){
    this.widthDropDownMenu=this.element.clientWidth+'px'
  }
  //click outside
  clickOutSide() {
    this.visibilityMenuDropdown = false;
  }
  //emit event of Dropdown text
  onDropdownChangeValue(newValue: object) {
    this.changeVisibilityMenuDropdown();
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

  //change status of visibility of dropdown menu
  changeVisibilityMenuDropdown() {
    this.visibilityMenuDropdown = !this.visibilityMenuDropdown;
  }

  //get value of select dropdown
  getValueOfSelectDropdown() {
    if (!this.items) return <span class="dropdown-text">{this.label}</span>;
    return this.items
      .map(item => {
        return item.text;
      })
      .includes(this.value) ? (
      <span class="dropdown-text">{this.value}</span>
    ) : (
      <span class="dropdown-text">{this.label}</span>
    );
  }
  //get opstions value
  getOptionsValue() {
    if (!this.items) {
      return (
        <li role="option" tabIndex={0} onClick={this.changeVisibilityMenuDropdown.bind(this)}>
          No hay opciones
        </li>
      );
    }
    return this.items.map(item => {
      return (
        <li role="option" tabindex={item.id} onClick={this.onDropdownChangeValue.bind(this, item)}>
          {item.text}
        </li>
      );
    });
  }
  render() {
    return (
      <Host onblur={this.clickOutSide.bind(this)}>
        <div class="scroll-hide">
          <div class={this.getStyleErrorMessage() + ' dropdown ' + this.getStyleDisabled()}>
            <button disabled={this.disabled} class="form-control" onClick={this.changeVisibilityMenuDropdown.bind(this)}>
              <div class="dropdown-text">
                <img src={this.urlIconLeft} class="imagen" />
                {this.getValueOfSelectDropdown()}
              </div>
              <img src={this.urlIconRight} class="icon-image" />
            </button>
            <label class={this.getStyleLabel()}> {this.label}</label>
          </div>
          <span class="error-message">{this.errorMessage}</span>
          <ul class={this.getClassDropdownMenu()} role="listbox" style={{'width':this.widthDropDownMenu}}>
            <span>{this.label}</span>
            {this.getOptionsValue()}
          </ul>
        </div>
      </Host>
    );
  }
}
