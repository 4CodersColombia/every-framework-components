import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import imageCompression from 'browser-image-compression';
import { EVERYFRAMEWORKICONS } from '../../everyFrameWorkIcons/everyFrameworkIcons';

@Component({
  tag: 'ef-add-images',
  styleUrl: 'ef-add-images.css',
  shadow: true,
})
export class EfAddImages {
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

  @Event() changeValue: EventEmitter<File[]>;

  async eventUpload(files: FileList) {
    const filesToEmit = await Promise.all(
      Array.from(files).map(async item => {
        return this.compressImage(item);
      }),
    );
    this.changeValue.emit(filesToEmit);
  }
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
    Array.from(files).forEach(item => {
      this.uploadImage(item);
    });
    this.eventUpload(files);
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
    return index + 1 == this.itemActive ? 'ef-add-images__item-selected' : 'ef-add-images__item-off';
  }

  getStyleAddImage() {
    const position = this.multiple ? '-1' : '1';
    return this.addImage && this.itemActive == this.photosUrl.length + 1 ? { opacity: '1' } : { 'opacity': '0', 'z-index': position };
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
      width: this.width +40 + 'px',
    };
  }

  renderImageArrow(option: string) {
    if (!this.multiple) return;
    const plusValue = option == 'left' ? -1 : 1;
    return (
      <img
        onClick={this.setItemActive.bind(this, plusValue)}
        class={`ef-add-images__arrow ef-add-images__arrow-${option}`}
        src={this.getImageArrow(option)}
        alt={`arrow-${option}`}
      />
    );
  }
  renderItems() {
    return this.photosUrl.map((item, index) => {
      return <img src={item} alt={item + index} class={`ef-add-images__item ${this.getItemSelected(index)}`} style={this.getStyleArchive()} />;
    });
  }
  renderAddImage() {
    if (this.addImage) {
      return (
        <div class="`ef-add-images__add-image-content" style={this.getStyleAddImage()}>
          <label htmlFor={'add-file'} class="ef-add-images__archive" style={this.getStyleArchive()}>
            <img class="ef-add-images__archive-img" src={this.urlIcon} alt="addArchive" />
            <span class="ef-add-images__archive-info">{this.infoIcon}</span>
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
          <span class="ef-add-images__archive-error ">{this.error}</span>
        </div>
      );
    }
  }

  render() {
    return (
      <Host>
        <div class="ef-add-images__container" style={this.getStyleWidthContainer()}>
          <span class="ef-add-images__archive-title">
            {this.title} <span class="ef-add-images__archive-subtitle">{this.subTitle}</span>
          </span>
          <div class="ef-add-images__slider">
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
