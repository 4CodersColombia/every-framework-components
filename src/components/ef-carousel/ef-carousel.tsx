import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ef-carousel',
  styleUrl: 'ef-carousel.css',
  shadow: true,
})
export class EfCarousel {
  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="slider" id="slider">
            <ul class="slides">
              <li class="slide" id="slide1">
                <a href="#">
                  <img src="https://i.blogs.es/594843/chrome/450_1000.jpg" alt="photo 1" />
                </a>
              </li>
              <li class="slide" id="slide2">
                <a href="#">
                  <img src="https://i.blogs.es/594843/chrome/450_1000.jpg" alt="photo 2" />
                </a>
              </li>
              <li class="slide" id="slide3">
                <a href="#">
                  <img src="https://i.blogs.es/594843/chrome/450_1000.jpg" alt="photo 3" />
                </a>
              </li>
              <li class="slide" id="slide4">
                <a href="#">
                  <img src="https://i.blogs.es/594843/chrome/450_1000.jpg" alt="photo 4" />
                </a>
              </li>
              <li class="slide" id="slide5">
                <a href="#">
                  <img src="https://i.blogs.es/594843/chrome/450_1000.jpg" alt="photo 5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
