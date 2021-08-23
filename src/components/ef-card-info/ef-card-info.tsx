import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ef-card-info',
  styleUrl: 'ef-card-info.css',
  shadow: true,
})
export class EfCardInfo {
  @Prop() image: string;
  @Prop() title: string;
  @Prop() subtitle: string;
  @Prop() styleTitle: { [key: string]: string };
  render() {
    return (
      <Host>
        <div class="card-info-div">
          <img src={this.image} alt="image" class="imagen" />
          <div class="title-column">
            <span class="title-info" style={this.styleTitle}>
              {this.title}
            </span>
            <span class="subtitle-info">{this.subtitle}</span>
          </div>
        </div>
      </Host>
    );
  }
}
