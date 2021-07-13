import { Component, Host, h, Prop } from '@stencil/core';
import { CONST_TYPES_XUACH_GLOBAL_INPUT } from '../../const/constXuachGlobalInput';

@Component({
  tag: 'xuach-global-input',
  styleUrl: 'xuach-global-input.css',
  shadow: true,
})
export class XuachGlobalInput {
  @Prop() disabled: boolean = false;
  @Prop() icon: string;
  @Prop() type: 'TEXT' | 'DROPDOWN' | 'PASSWORD' = 'TEXT';
  @Prop() text: string;
  @Prop() errorMessages: [];
  @Prop() iconPosition: 'LEFT' | 'RIGHT' = 'LEFT';
  @Prop() label: string;

  //get type of input
  getTypeOfInput() {
    return CONST_TYPES_XUACH_GLOBAL_INPUT[this.type];
  }
  render() {
    return (
      <Host>
        <label class='input'>
        <input type="text" />
        </label>
      </Host>
    );
  }
}
