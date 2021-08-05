import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pr-profile-rol',
  styleUrl: 'pr-profile-rol.css',
  shadow: true,
})
export class PrProfileRol {
  @Prop() image: string;
  @Prop() name: string;
  @Prop() rol: string;

  render() {
    return (
      <Host>
        <div class="profile-rol-div">
          <img src={this.image} alt="image-profile" />
          <div class="name-rol-column">
            <span class="name">{this.name}</span>
            <span class="rol">{this.rol}</span>
          </div>
        </div>
      </Host>
    );
  }
}
