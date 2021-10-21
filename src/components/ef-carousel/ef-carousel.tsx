import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import imageCompression from 'browser-image-compression';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';

@Component({
  tag: 'ef-carousel',
  styleUrl: 'ef-carousel.css',
  shadow: true,
})
export class EfCarousel {
  @Prop({ mutable: true }) photosUrl: string[] = [];
  @Prop({ mutable: true }) itemActive: number = 1;
  @Prop() addImage: boolean = false;
  @Prop() urlIcon: string = EVERYFRAMEWORKICONS['ADD_IMAGE'];
  @Prop() title: string = 'Title';
  @Prop() subTitle: string = 'subtitle';
  @Prop() infoIcon: string = 'add';
  @Prop() circle: boolean = false;
  @Prop() multiple: boolean = false;
  @Prop() width: number = 100;
  @Prop() height: number = 100;
  @Prop() error: string;

  async compressImage(photoP: File) {
    var options = {
      maxSizeMB: 0.7,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      return imageCompression(photoP, options);
    } catch (error) {
      this.error = error;
    }
  }
  onInputChange(files: FileList) {
    // check if 1 image is uploaded
    Array.from(files).map(item => {
      this.uploadImage(item);
    });
  }
  updatePhotos(file: File) {
    if (this.multiple) {
      this.photosUrl = [...this.photosUrl, URL.createObjectURL(file)];
    } else {
      this.photosUrl = [URL.createObjectURL(file)];
    }
  }
  uploadImage(file: File) {
    // create a new instance of HTML5 FileReader api to handle uploading
    const reader = new FileReader();

    reader.onload = () => {
      this.updatePhotos(file);
      // this.eventUpload(file);
    };

    reader.onerror = err => {
      this.error = 'something went wrong...' + err;
    };
    reader.readAsDataURL(file);
  }

  setItemActive(option: number) {
    //actualizador del itemActive  con reglas de bordes
    if (
      (this.itemActive <= 1 && option == -1) ||
      (((this.itemActive >= this.photosUrl.length && !this.addImage) || (this.itemActive >= this.photosUrl.length + 1 && this.addImage)) && option == 1)
    )
      return;
    this.itemActive += option;
    location.href = '#slide1';
  }

  getImageArrow(option: string) {
    //funcion para retornar el tipo de flecha desactivada o activada
    if (
      (this.itemActive == 1 && option == 'left') ||
      (((this.itemActive == this.photosUrl.length && !this.addImage) || (this.itemActive == this.photosUrl.length + 1 && this.addImage)) && option == 'right')
    )
      return EVERYFRAMEWORKICONS['ARROW_LEFT_DISABLED'];
    return EVERYFRAMEWORKICONS['ARROW_LEFT'];
  }

  getItemSelected(index) {
    return index + 1 == this.itemActive ? 'ef-carousel__item-selected' : 'ef-carousel__item-off';
  }

  getStyleAddImage() {
    const position= this.multiple?'-1':'1'
    return this.addImage && this.itemActive == this.photosUrl.length + 1 ? { opacity: '1' } : { opacity: '0','z-index':position };
  }
  getStyleArchive() {
    if (this.circle) return { 'width': this.width + 'px', 'height': this.height + 'px', 'border-radius': '100%' };
    return {
      width: this.width + 'px',
      height: this.height + 'px',
    };
  }
  getStyleWidthContainer() {
    return {
      width: this.width * 2 + 'px',
    };
  }

  renderImageArrow(option: string) {
    if (!this.multiple) return;
    const plusValue = option == 'left' ? -1 : 1;
    return (
      <img onClick={this.setItemActive.bind(this, plusValue)} class={`ef-carousel__arrow ef-carousel__arrow-${option}`} src={this.getImageArrow(option)} alt={`arrow-${option}`} />
    );
  }
  renderItems() {
    return this.photosUrl.map((item, index) => {
      return <img src={item} alt={item + index} class={`ef-carousel__item ${this.getItemSelected(index)}`} style={this.getStyleArchive()} />;
    });
  }
  renderAddImage() {
    if (this.addImage) {
      return (
        <div class="`ef-carousel__add-image-content" style={this.getStyleAddImage()}>
          <label htmlFor={'add-file'} class="ef-carousel__archive" style={this.getStyleArchive()}>
            <img class="ef-carousel__archive-img" src={this.urlIcon} alt="addArchive" />
            <span class="ef-carousel__archive-info">{this.infoIcon}</span>
          </label>
          <input
            onChange={($event: any) => {
              this.onInputChange($event.target.files);
              $event.target.value = null;
            }}
            accept="image/*"
            type="file"
            id={'add-file'}
            multiple={this.multiple}
            style={{ display: 'none', visibility: 'none' }}
          ></input>
          <span class="ef-carousel__archive-error ">{this.error}</span>
        </div>
      );
    }
  }

  render() {
    return (
      <Host>
        <div class="ef-carousel__container" style={this.getStyleWidthContainer()}>
          <span class="ef-carousel__archive-title">
            {this.title} <span class="ef-carousel__archive-subtitle">{this.subTitle}</span>
          </span>
          <div class="ed-carousel__slider">
            {this.renderImageArrow('left')}
            {this.renderItems()}
            {this.renderAddImage()}
            {this.renderImageArrow('right')}
          </div>
        </div>
      </Host>
    );
  }
}
